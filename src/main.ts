import { graph, batch } from "./index.js";

// const b = await batch(
//     graph().drives.byId("b!kJTEPDJfE0angPdqCspVt89RXKe8TrtBtHb3i6IU9QiQ0k0wD9ocQqORW-ET3eMU").root.children.get,
//     graph().sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").select("siteCollection", "webUrl").get,
//     [graph().sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").lists.byId("7b5fb91d-8bf0-4435-8f7c-3cea370cde21").items.add, [{
//         fields: <any>{
//             Title: "Testing testing testing"
//         }
//     }]]
// );

const y = await graph().drives.byId("b!kJTEPDJfE0angPdqCspVt89RXKe8TrtBtHb3i6IU9QiQ0k0wD9ocQqORW-ET3eMU").root.children.get();

// const u = await graph.sites.select("siteCollection", "webUrl").filter("siteCollection/root ne null").get();

// const u = await graph.sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").select("siteCollection", "webUrl").get();

// await graph.sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").lists.byId("7b5fb91d-8bf0-4435-8f7c-3cea370cde21").items.add({
//     fields: <any>{
//         Title: "Testing testing testing"
//     }
// });

// const u = await graph.sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").lists.byId("7b5fb91d-8bf0-4435-8f7c-3cea370cde21").items.byId("81").delete();

// const u = await graph.sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").lists.byId("7b5fb91d-8bf0-4435-8f7c-3cea370cde21").items.top(2).get();

// console.log(JSON.stringify(u, null, 2));

// const itemCollector = [];
// for await (let items of graph().sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").lists.byId("7b5fb91d-8bf0-4435-8f7c-3cea370cde21").items.top(20)) {
//     itemCollector.push(...items);
// }
// console.log(itemCollector.length);

// const y = await graph().sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").get();


// call some action/function
// const z = await graph().sites.byId("318studios.sharepoint.com,80c0b48a-973d-4586-9c73-ecd5cecdd0e6,2cbc891c-749e-46fc-be2c-e5d53d80acff").getApplicableContentTypesForList("7b5fb91d-8bf0-4435-8f7c-3cea370cde21");

const y3 = 9;


