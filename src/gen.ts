import { get } from "./ops.js";
import { xml2js } from "xml-js";
import { ParserField, str } from "./parsers.js";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const docCachePath = "./metadata.xml";
const outPath = "./src/generated-types.ts"

async function generateTypings(): Promise<void> {

    const resolvedDocCachePath = resolve(docCachePath);
    const resolvedOutPath = resolve(outPath);
    const builder: string[] = [];

    // we add some things we need at the top
    builder.push(`export const KeyProperty = Symbol.for("key");`);

    let metadataDoc = "";

    if (existsSync(resolvedDocCachePath)) {
        metadataDoc = readFileSync(resolvedDocCachePath, { encoding: "utf-8" });
    } else {
        metadataDoc = await get.call({
            [ParserField]: str,
            paths: ["$metadata"],
        });

        writeFileSync(resolvedDocCachePath, metadataDoc, { encoding: "utf-8" });
    }

    const jsonDoc = xml2js(metadataDoc);

    const dataServices = jsonDoc.elements[0].elements[0];

    const thing = [];

    for (let i = 0; i < dataServices.elements.length; i++) {

        const dataService = dataServices.elements[i];

        // for this we can just try and do the core graph
        if (dataService.attributes?.Namespace === "microsoft.graph") {

            const dic = new Map<string, number>();

            for (let j = 0; j < dataService.elements.length; j++) {

                switch (dataService.elements[j].name) {
                    case "EnumType":
                        enumTypeWriter(builder, dataService.elements[j]);
                        break;
                    case "EntityType":
                        entityTypeWriter(builder, dataService.elements[j]);
                        break;
                    case "ComplexType":
                        complexTypeWriter(builder, dataService.elements[j]);
                        break;
                    default:
                        if (thing.indexOf(dataService.elements[j].name) < 0) {
                            thing.push(dataService.elements[j].name);
                            console.log(`Unhandled root element type ${dataService.elements[j].name}`);
                        }
                        break;
                }

                if (dic.has(dataService.elements[j].name)) {
                    dic.set(dataService.elements[j].name, dic.get(dataService.elements[j].name) + 1);
                } else {
                    dic.set(dataService.elements[j].name, 1);
                }
            }

            for (const [key, value] of dic) {
                console.log(`${key} = ${value}`);
            }
        }
    }

    writeFileSync(resolvedOutPath, builder.join("\n"))
}

await generateTypings();

const enum Bob {
    Jim = 1,
    John = 2
}

interface IEnumElement {
    attributes: {
        Name: string;
    },
    elements: {
        name: string,
        attributes: {
            Name: string;
            Value: string;
        },
    }[]
}

function cleanName(name: string): string {

    name =  (name || "").replace(/^graph\./, "");

    return cleanReservedWords(name);
}

function cleanType(type: string): string {

    if (type.startsWith("Edm.")) {

        type = type.replace(/^Edm\./i, "");

        switch (type) {
            case "String":
            case "Guid":
                type = "string";
                break;
            case "DateTimeOffset":
            case "TimeOfDay":
            case "Date":
                type = "Date";
                break;
            case "Boolean":
            case "Byte":
                type = "boolean";
                break;
            case "Duration":
            case "Int16":
            case "Int32":
            case "Int64":
            case "Double":
            case "Single":
                type = "number";
                break;
            case "Stream":
            case "Binary":
                type = "Buffer";
                break;
            default:
                console.log(type);
        }

    } else if (type.startsWith("graph.")) {

        type = cleanName(type);

    } else if (type.startsWith("Collection(")) {

        const nm = /Collection\((.*?)\)/i.exec(type);
        type = cleanType(nm[1]) + "[]";

    } else {
        console.warn(`Unkown type: ${type}`);
    }

    return cleanReservedWords(type);
}

function cleanReservedWords(str: string): string {
    // now we have to fix up type names that happe to also be reserved words
    switch (str) {
        case "package":
            str = "packageType"
            break;
    }

    return str;
}

function enumTypeWriter(builder: string[], enumElement: IEnumElement): void {

    builder.push(`export const enum ${cleanName(enumElement.attributes.Name)} {`);

    const elements = [];

    for (let x = 0; x < enumElement.elements.length; x++) {
        elements.push(`${enumElement.elements[x].attributes.Name} = ${enumElement.elements[x].attributes.Value}`);
    }

    builder.push(elements.join(",\n"));

    builder.push("}");
}

interface IEntityElement {
    attributes: {
        Name: string;
        BaseType?: string;
    },
    elements: ({
        name: "Key",
        attributes: {
            Name: string;
            Value: string;
        },
        elements: {
            name: "PropertyRef";
            attributes: {
                Name: string;
            },
        }[]
    } | {
        name: "Property",
        attributes: {
            Name: string;
            Type: string;
            Nullable?: boolean;
        },
    } | {
        name: "NavigationProperty",
        attributes: {
            Name: string;
            Type: string;
            Nullable?: boolean;
        },
    })[]
}

function entityTypeWriter(builder: string[], entityElement: IEntityElement): void {

    // export interface IUser extends IDrive {

    builder.push(`export interface ${cleanName(entityElement.attributes.Name)} ${entityElement.attributes.BaseType ? `extends ${cleanName(entityElement.attributes.BaseType)}` : ""} {`);

    if (entityElement.elements && entityElement.elements.length > 0) {

        const entityBuilder = [];

        for (let x = 0; x < entityElement.elements.length; x++) {

            const entity = entityElement.elements[x];
            let type = "";

            switch (entity.name) {
                case "Key":
                    entityBuilder.push(`[KeyProperty]: "${entity.elements[0].attributes.Name}";`);
                    break;
                case "NavigationProperty":

                    type = cleanType(entity.attributes.Type);

                    if (type.startsWith("microsoft.graph.")) {
                        continue;
                    }
                    entityBuilder.push(`${entity.attributes.Name}: ${type}${Boolean(entity.attributes.Nullable) ? " | null" : ""};`);
                    break;
                case "Property":

                    type = cleanType(entity.attributes.Type);

                    if (type.startsWith("microsoft.graph.")) {
                        continue;
                    }
                    entityBuilder.push(`${entity.attributes.Name}: ${type}${Boolean(entity.attributes.Nullable) ? " | null" : ""};`);
                    break;
            }
        }

        builder.push(entityBuilder.join("\n"));
    }

    builder.push("}");
}

interface IComplexTypeElement {
    attributes: {
        Name: string;
        BaseType?: string;
    },
    elements: {
        name: string,
        attributes: {
            Name: string;
            Type: string;
            Nullable?: boolean;
        },
    }[]
}

function complexTypeWriter(builder: string[], complexTypeElement: IComplexTypeElement): void {

    // export interface IUser extends IDrive {

    builder.push(`export interface ${cleanName(complexTypeElement.attributes.Name)} ${complexTypeElement.attributes.BaseType ? `extends ${cleanName(complexTypeElement.attributes.BaseType)}` : ""} {`);

    if (complexTypeElement.elements && complexTypeElement.elements.length > 0) {

        const complexTypeBuilder = [];

        for (let x = 0; x < complexTypeElement.elements.length; x++) {

            const entity = complexTypeElement.elements[x];

            const type = cleanType(entity.attributes.Type);

            if (type.startsWith("microsoft.graph.")) {
                continue;
            }

            complexTypeBuilder.push(`${entity.attributes.Name}: ${type}${Boolean(entity.attributes.Nullable) ? " | null" : ""};`);
        }

        builder.push(complexTypeBuilder.join("\n"));
    }

    builder.push("}");
}

// <ComplexType Name="itemBody">
// <Property Name="content" Type="Edm.String"/>
// <Property Name="contentType" Type="graph.bodyType"/>
// </ComplexType>
// <ComplexType Name="publicError">
// <Property Name="code" Type="Edm.String"/>
// <Property Name="details" Type="Collection(graph.publicErrorDetail)"/>
// <Property Name="innerError" Type="graph.publicInnerError"/>
// <Property Name="message" Type="Edm.String"/>
// <Property Name="target" Type="Edm.String"/>
// </ComplexType>
// <ComplexType Name="publicErrorDetail">
// <Property Name="code" Type="Edm.String"/>
// <Property Name="message" Type="Edm.String"/>
// <Property Name="target" Type="Edm.String"/>
// </ComplexType>

// <EntityType Name="application" BaseType="graph.directoryObject" OpenType="true">
// <Property Name="addIns" Type="Collection(graph.addIn)" Nullable="false"/>
// <Property Name="api" Type="graph.apiApplication"/>
// <Property Name="appId" Type="Edm.String"/>
// <Property Name="applicationTemplateId" Type="Edm.String"/>
// <Property Name="appRoles" Type="Collection(graph.appRole)" Nullable="false"/>
// <Property Name="certification" Type="graph.certification"/>
// <Property Name="createdDateTime" Type="Edm.DateTimeOffset"/>
// <Property Name="defaultRedirectUri" Type="Edm.String"/>
// <Property Name="description" Type="Edm.String"/>
// <Property Name="disabledByMicrosoftStatus" Type="Edm.String"/>
// <Property Name="displayName" Type="Edm.String"/>
// <Property Name="groupMembershipClaims" Type="Edm.String"/>
// <Property Name="identifierUris" Type="Collection(Edm.String)" Nullable="false"/>
// <Property Name="info" Type="graph.informationalUrl"/>
// <Property Name="isDeviceOnlyAuthSupported" Type="Edm.Boolean"/>
// <Property Name="isFallbackPublicClient" Type="Edm.Boolean"/>
// <Property Name="keyCredentials" Type="Collection(graph.keyCredential)" Nullable="false"/>
// <Property Name="logo" Type="Edm.Stream" Nullable="false"/>
// <Property Name="notes" Type="Edm.String"/>
// <Property Name="oauth2RequirePostResponse" Type="Edm.Boolean" Nullable="false"/>
// <Property Name="optionalClaims" Type="graph.optionalClaims"/>
// <Property Name="parentalControlSettings" Type="graph.parentalControlSettings"/>
// <Property Name="passwordCredentials" Type="Collection(graph.passwordCredential)" Nullable="false"/>
// <Property Name="publicClient" Type="graph.publicClientApplication"/>
// <Property Name="publisherDomain" Type="Edm.String"/>
// <Property Name="requestSignatureVerification" Type="graph.requestSignatureVerification"/>
// <Property Name="requiredResourceAccess" Type="Collection(graph.requiredResourceAccess)" Nullable="false"/>
// <Property Name="samlMetadataUrl" Type="Edm.String"/>
// <Property Name="serviceManagementReference" Type="Edm.String"/>
// <Property Name="servicePrincipalLockConfiguration" Type="graph.servicePrincipalLockConfiguration"/>
// <Property Name="signInAudience" Type="Edm.String"/>
// <Property Name="spa" Type="graph.spaApplication"/>
// <Property Name="tags" Type="Collection(Edm.String)" Nullable="false"/>
// <Property Name="tokenEncryptionKeyId" Type="Edm.Guid"/>
// <Property Name="verifiedPublisher" Type="graph.verifiedPublisher"/>
// <Property Name="web" Type="graph.webApplication"/>
// <NavigationProperty Name="appManagementPolicies" Type="Collection(graph.appManagementPolicy)"/>
// <NavigationProperty Name="createdOnBehalfOf" Type="graph.directoryObject"/>
// <NavigationProperty Name="extensionProperties" Type="Collection(graph.extensionProperty)" ContainsTarget="true"/>
// <NavigationProperty Name="federatedIdentityCredentials" Type="Collection(graph.federatedIdentityCredential)" ContainsTarget="true"/>
// <NavigationProperty Name="homeRealmDiscoveryPolicies" Type="Collection(graph.homeRealmDiscoveryPolicy)"/>
// <NavigationProperty Name="owners" Type="Collection(graph.directoryObject)"/>
// <NavigationProperty Name="tokenIssuancePolicies" Type="Collection(graph.tokenIssuancePolicy)"/>
// <NavigationProperty Name="tokenLifetimePolicies" Type="Collection(graph.tokenLifetimePolicy)"/>
// <NavigationProperty Name="synchronization" Type="graph.synchronization" ContainsTarget="true"/>
// <Annotation Term="Org.OData.Core.V1.AlternateKeys">
// <Collection>
// <Record Type="Org.OData.Core.V1.AlternateKey">
// <PropertyValue Property="Key">
// <Collection>
// <Record Type="Org.OData.Core.V1.PropertyRef">
// <PropertyValue Property="Alias" String="appId"/>
// <PropertyValue Property="Name" PropertyPath="appId"/>
// </Record>
// </Collection>
// </PropertyValue>
// </Record>
// </Collection>
// </Annotation>
// </EntityType>

