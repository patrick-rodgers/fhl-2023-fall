import { opMap } from "./ops.js";
import { xml2js } from "xml-js";
import { ParserField, str } from "./parsers.js";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const docCachePath = "./metadata.xml";
const outPath = "./src/generated-types.ts"

type EntityMap = Map<string, string[]>;

async function generateTypings(): Promise<void> {

    const resolvedDocCachePath = resolve(docCachePath);
    const resolvedOutPath = resolve(outPath);

    const fileBuilder: string[] = [];
    // we add some things we need at the top
    fileBuilder.push(`export const KeyProperty = Symbol.for("key");`);

    fileBuilder.push("export type Gettable<T = {}> = {");
    fileBuilder.push("(init?: RequestInit): Promise<PropertiesOf<T>>;");
    fileBuilder.push("get(init?: RequestInit): Promise<PropertiesOf<T>>;");
    fileBuilder.push("}");

    fileBuilder.push("export type ColGettable<T = {}> = {");
    fileBuilder.push("(init?: RequestInit): Promise<T>;");
    fileBuilder.push("get(init?: RequestInit): Promise<T>;");
    fileBuilder.push("}");

    fileBuilder.push("export type Updateable<T = {}> = {");
    fileBuilder.push("update(props: Partial<T>): Promise<PropertiesOf<T>>;");
    fileBuilder.push("}");

    fileBuilder.push("export type Deleteable<T = {}> = {");
    fileBuilder.push("delete(): Promise<void>;");
    fileBuilder.push("}");

    fileBuilder.push("export type Addable<T = {}> = {");
    fileBuilder.push("add(props: Partial<T>): Promise<PropertiesOf<T>>;");
    fileBuilder.push("}");

    fileBuilder.push("export type Merge<B, P> = {");
    fileBuilder.push("[K in (keyof B | keyof P)]:(K extends keyof B ? B[K] : never)| (K extends keyof P ? P[K] : never)");
    fileBuilder.push("}");

    fileBuilder.push(`export type CleanEntity<T> = Omit<T, "update" | "delete" | "add" | "get" | "(init?: RequestInit)">;`);

    fileBuilder.push(`export type PropertiesOf<C> = { [K in keyof C as C[K] extends Function ? never : K]: C[K]  }`);

    fileBuilder.push("export type Collection<T> = ColGettable<PropertiesOf<T>[]> & Addable<T> & {");
    fileBuilder.push("byId(id: string): T;");
    fileBuilder.push("top(top: number): Collection<T>;");
    fileBuilder.push("select(...fields: (keyof T)[]): Collection<T>;");
    fileBuilder.push("filter(filter: string): Collection<T>;");
    fileBuilder.push("expand(...fields: (keyof T)[]): Collection<T>;");
    fileBuilder.push("[Symbol.asyncIterator](): AsyncIterator<PropertiesOf<T>[]>;");
    fileBuilder.push("}");

    fileBuilder.push(`export type Entity<base, propsType, merged = Merge<CleanEntity<base>, propsType>> = merged & Gettable<merged> & Updateable<merged> & Deleteable<merged> & {`);
    fileBuilder.push("select(...fields: (keyof merged)[]): Entity<base, propsType>;");
    fileBuilder.push("expand(...fields: (keyof merged)[]): Entity<base, propsType>;");
    fileBuilder.push("}");

    fileBuilder.push("export type Singleton<entityType> = Gettable<entityType> & { [K in (keyof entityType)]: entityType[K] }");

    // this tracks the entities as we build the strings
    const entityMap: EntityMap = new Map<string, string[]>();

    let metadataDoc = "";

    if (existsSync(resolvedDocCachePath)) {

        metadataDoc = readFileSync(resolvedDocCachePath, { encoding: "utf-8" });

    } else {

        metadataDoc = await opMap.get("get").call({
            [ParserField]: str,
            paths: ["$metadata"],
        });

        writeFileSync(resolvedDocCachePath, metadataDoc, { encoding: "utf-8" });
    }

    const jsonDoc = xml2js(metadataDoc);

    const dataServices = jsonDoc.elements[0].elements[0];

    const skippedElements = [];

    let elements = dataServices.elements;

    while (elements.length > 0) {

        processElements(entityMap, elements, skippedElements);
        elements = [...skippedElements];
        skippedElements.length = 0;
    }

    // map the entity map into a string
    for (const [key, value] of entityMap) {

        // console.log(`Writing [${key}]`);

        fileBuilder.push(...value);
        // everything leaves off the final '}' so the entities can be added to as they go, we close them here.
        fileBuilder.push("}");
    }

    writeFileSync(resolvedOutPath, fileBuilder.join("\n"))
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

function processElements(entityMap: EntityMap, elements: any[], skippedElements: any[]) {

    const thing = [];

    for (let i = 0; i < elements.length; i++) {

        const dataService = elements[i];

        // for this we can just try and do the core graph
        if (dataService.attributes?.Namespace === "microsoft.graph") {

            // const dic = new Map<string, number>();

            for (let j = 0; j < dataService.elements.length; j++) {

                switch (dataService.elements[j].name) {
                    case "EnumType":
                        enumTypeWriter(entityMap, dataService.elements[j]);
                        break;
                    case "EntityType":
                        entityTypeWriter(entityMap, dataService.elements[j]);
                        break;
                    case "ComplexType":
                        complexTypeWriter(entityMap, dataService.elements[j]);
                        break;
                    case "Function":
                        functionWrite(entityMap, dataService.elements[j], skippedElements);
                        break;
                    case "Action":
                        actionWrite(entityMap, dataService.elements[j], skippedElements);
                        break;
                    case "EntityContainer":
                        containerWrite(entityMap, dataService.elements[j]);
                        break;
                    default:
                        if (thing.indexOf(dataService.elements[j].name) < 0) {
                            thing.push(dataService.elements[j].name);
                            console.log(`Unhandled root element type ${dataService.elements[j].name}`);
                        }
                        break;
                }

                // if (dic.has(dataService.elements[j].name)) {
                //     dic.set(dataService.elements[j].name, dic.get(dataService.elements[j].name) + 1);
                // } else {
                //     dic.set(dataService.elements[j].name, 1);
                // }
            }

            // for (const [key, value] of dic) {
            //     console.log(`${key} = ${value}`);
            // }
        }
    }
}

function cleanName(name: string): string {

    name = (name || "").replace(/^graph\./, "");

    return cleanReservedWords(name);
}

function cleanEntitySetType(type: string): string {

    type = type.replace(/^microsoft\./i, "");

    return cleanType(type);
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

    } else if (type.startsWith("microsoft.graph")) {
        // TODO:: we skip these for now because they are not in the core graph schema we are focused on
        type = "{}";
    }
    else if (type.startsWith("graph.")) {

        type = cleanName(type);

    } else if (type.startsWith("Collection(")) {

        const nm = /Collection\((.*?)\)/i.exec(type);
        const cleanedCollectionType = cleanType(nm[1]);
        type = `Collection<${cleanedCollectionType}>`;

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

function cleanNavTarget(target: string): string {
    // do some special case cleanup
    switch (target) {
        case "directoryObjects":
            target = `Collection<directoryObject>`;
            break;
        case "users":
            target = `Collection<user>`;
            break;
        case "oauth2PermissionGrants":
            target = `Collection<oAuth2PermissionGrant>`;
            break;
        case "groups":
            target = `Collection<group>`;
            break;
        case "teamsTemplates":
            target = `Collection<teamsTemplate>`;
            break;
        case "externalConnectors.external":
        case "externalConnectors.externalConnection":
            target = "{}";
            break;
    }
    return target;
}

function enumTypeWriter(map: EntityMap, enumElement: IEnumElement): void {

    const name = cleanName(enumElement.attributes.Name);

    if (map.has(name)) {
        throw Error("Enum should be all defined at once?");
    }

    const localBuilder = [];

    localBuilder.push(`export const enum ${name} {`);

    const elements = [];

    for (let x = 0; x < enumElement.elements.length; x++) {
        elements.push(`${enumElement.elements[x].attributes.Name} = ${enumElement.elements[x].attributes.Value}`);
    }

    localBuilder.push(elements.join(",\n"));

    map.set(name, localBuilder);
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

function makeEntitiyPropsName(entityName: string): string {
    if (entityName === "{}" || entityName === "string" || entityName === "number") {
        return entityName;
    }
    return `${entityName}Props`;
}

function entityTypeWriter(map: EntityMap, entityElement: IEntityElement): void {

    const entityName = cleanName(entityElement.attributes.Name);

    if (map.has(entityName)) {
        throw Error("Entity must be defined before the other stuff, right?");
    }

    const localBuilder = [];
    const entityBuilder = [];
    let propsEntityName = makeEntitiyPropsName(entityName);

    if (entityElement.elements && entityElement.elements.length > 0) {

        const propsBuilder = []

        let wroteKey = false;

        for (let x = 0; x < entityElement.elements.length; x++) {

            const entity = entityElement.elements[x];
            let type = "";

            switch (entity.name) {
                case "Key":
                    propsBuilder.push(`[KeyProperty]: "${entity.elements[0].attributes.Name}";`);
                    wroteKey = true;
                    break;
                case "NavigationProperty":

                    type = cleanType(entity.attributes.Type);

                    if (type.startsWith("microsoft.graph.")) {
                        continue;
                    }
                    propsBuilder.push(`${cleanName(entity.attributes.Name)}: ${type}${Boolean(entity.attributes.Nullable) ? " | null" : ""};`);
                    break;
                case "Property":

                    type = cleanType(entity.attributes.Type);

                    if (type.startsWith("microsoft.graph.")) {
                        continue;
                    }
                    propsBuilder.push(`${entity.attributes.Name}: ${type}${Boolean(entity.attributes.Nullable) ? " | null" : ""};`);
                    break;
            }
        }


        if (entityName === "entity") {
            entityBuilder.push(`export interface ${propsEntityName} {`);
        } else {
            entityBuilder.push(`export interface ${propsEntityName} extends ${wroteKey ? "Omit<entityProps, typeof KeyProperty>" : "entityProps"}  {`);
        }

        entityBuilder.push(...propsBuilder);

        entityBuilder.push("}");

    } else {
        entityBuilder.push(`export interface ${propsEntityName} { }`);
    }
    localBuilder.push(entityBuilder.join("\n"));

    // see if we can clean up intellisense
    if (entityName === "entity") {
        localBuilder.push(`export type ${entityName} = {`);
    } else {
        localBuilder.push(`export type ${entityName} = ${entityElement.attributes.BaseType ? `Entity<${cleanName(entityElement.attributes.BaseType)}, ${propsEntityName}>` : `Entity<{}, ${propsEntityName}>`} & {`);
    }

    map.set(entityName, localBuilder);
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

function complexTypeWriter(map: EntityMap, complexTypeElement: IComplexTypeElement): void {

    const name = cleanName(complexTypeElement.attributes.Name);

    if (map.has(name)) {
        throw Error("Complex Types should be fully defined first?");
    }

    const localBuilder = [];

    localBuilder.push(`export interface ${name} ${complexTypeElement.attributes.BaseType ? `extends ${cleanName(complexTypeElement.attributes.BaseType)}` : ""} {`);

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

        localBuilder.push(complexTypeBuilder.join("\n"));
    }

    map.set(name, localBuilder);
}

interface IFunctionElement {
    attributes: {
        Name: string;
        IsBound?: boolean;
        IsComposable?: boolean;
    },
    elements: ({
        name: "Parameter",
        attributes: {
            Name: "bindingParameter" | string;
            Type: string;
        }
    } | {
        name: "ReturnType",
        attributes: {
            Type: string;
            Nullable?: boolean;
        }
    })[];
}

function functionWrite(map: EntityMap, functionElement: IFunctionElement, skippedElements: any[]): void {

    const functionName = cleanName(functionElement.attributes.Name);
    let bindingHostName = "";
    let isClosed = false;

    if (functionElement.elements && functionElement.elements.length > 0) {

        const functionBuilder = [`${functionName}(`];
        const paramBuilder = [];

        for (let x = 0; x < functionElement.elements.length; x++) {

            const params = functionElement.elements[x];

            if (params.name === "Parameter" && /bindingParameter|bindparameter/i.test(params.attributes.Name)) {

                bindingHostName = cleanType(params.attributes.Type);

                if (!map.has(bindingHostName)) {
                    // if we haven't gotten to this things parent yet, we just punt
                    skippedElements.push(functionElement);
                    return;
                }

            } else if (params.name === "Parameter") {

                const paramName = cleanName(params.attributes.Name);
                const paramType = cleanType(params.attributes.Type);

                paramBuilder.push(`${paramName}: ${paramType}`);

            } else if (params.name === "ReturnType") {

                const returnType = cleanType(params.attributes.Type);

                functionBuilder.push(`${paramBuilder.join(", ")}): ${returnType};`);
                isClosed = true;
            }
        }

        // TODO:: this is a bit of a hack, we just skip the few functions that don't actually have binding hosts for now
        if (bindingHostName !== "") {

            if (!isClosed) {
                functionBuilder.push("): void;");
            }

            map.get(bindingHostName).push(functionBuilder.join(""));
        }
    }
}

interface IActionElement {
    attributes: {
        Name: string;
        IsBound?: boolean;
        IsComposable?: boolean;
    },
    elements: ({
        name: "Parameter",
        attributes: {
            Name: "bindingParameter" | string;
            Type: string;
        }
    } | {
        name: "ReturnType",
        attributes: {
            Type: string;
            Nullable?: boolean;
        }
    })[];
}

function actionWrite(map: EntityMap, actionElement: IActionElement, skippedElements: any[]): void {

    const functionName = cleanName(actionElement.attributes.Name);
    let bindingHostName = "";
    let isClosed = false;

    if (actionElement.elements && actionElement.elements.length > 0) {

        const functionBuilder = [`${functionName}(`];
        const paramBuilder = [];

        for (let x = 0; x < actionElement.elements.length; x++) {

            const params = actionElement.elements[x];

            if (params.name === "Parameter" && /bindingParameter|bindparameter/i.test(params.attributes.Name)) {

                bindingHostName = cleanType(params.attributes.Type);

                if (!map.has(bindingHostName)) {
                    // if we haven't gotten to this things parent yet, we just punt
                    skippedElements.push(actionElement);
                    return;
                }

            } else if (params.name === "Parameter") {

                const paramName = cleanName(params.attributes.Name);
                const paramType = cleanType(params.attributes.Type);

                paramBuilder.push(`${paramName}: ${paramType}`);

            } else if (params.name === "ReturnType") {

                const returnType = cleanType(params.attributes.Type);

                functionBuilder.push(`${paramBuilder.join(", ")}): ${returnType};`);
                isClosed = true;
            }
        }

        // TODO:: this is a bit of a hack, we just skip the few actions that don't actually have binding hosts for now
        if (bindingHostName !== "") {

            if (!isClosed) {
                functionBuilder.push("): void;");
            }

            map.get(bindingHostName).push(functionBuilder.join(""));
        }
    }
}

interface IContainerElement {
    attributes: {
        Name: "GraphService";
    },
    elements: ({
        name: "EntitySet",
        attributes: {
            Name: string;
            EntityType: string;
        },
        elements?: ({
            name: "NavigationPropertyBinding",
            attributes: {
                Path: string;
                Target: string;
            },
        })[]
    } | {
        name: "Singleton",
        attributes: {
            Name: string;
            Type: string;
        }
    })[];
}

function containerWrite(map: EntityMap, containerElement: IContainerElement) {

    const containerName = cleanName(containerElement.attributes.Name);
    const containerWriter = [];

    containerWriter.push(`export interface ${containerName} {`);

    if (containerElement.elements && containerElement.elements.length > 0) {

        for (let x = 0; x < containerElement.elements.length; x++) {

            const element = containerElement.elements[x];

            switch (element.name) {
                case "EntitySet":

                    const entityType = cleanNavTarget(cleanEntitySetType(element.attributes.EntityType));

                    if (element.elements && element.elements.length > 0) {

                        containerWriter.push(`${cleanName(element.attributes.Name)}: Collection<${entityType}> & {`);

                        for (let y = 0; y < element.elements.length; y++) {

                            const navProp = element.elements[y];

                            if (navProp.name === "NavigationPropertyBinding") {

                                if (navProp.attributes.Path.indexOf("/") > -1 || navProp.attributes.Target.indexOf("/") > -1) {
                                    // TODO:: let's just skip these weirdo props with slashes for now
                                    continue;
                                }

                                containerWriter.push(`${cleanName(navProp.attributes.Path)}: ${cleanNavTarget(cleanType(navProp.attributes.Target))};`);

                            } else {
                                console.log(`Unexpected EntitySet [${element.name}] element ${navProp.name}`);
                            }
                        }

                        containerWriter.push("}");

                    } else {

                        containerWriter.push(`${cleanName(element.attributes.Name)}: Collection<${entityType}>;`);
                    }
                    break;

                case "Singleton":

                    const singletonType = cleanNavTarget(cleanEntitySetType(element.attributes.Type));

                    containerWriter.push(`${cleanName(element.attributes.Name)}: Singleton<${singletonType}>;`);

                    break;
                default:
                    // @ts-ignore
                    console.log(`Unrecognized EntityContainer element '${element.name}'.`);
                    break;
            }
        }
    }

    map.set(containerName, containerWriter);
}
