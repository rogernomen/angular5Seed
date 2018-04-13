///<reference path="../../typings.d.ts"/>
import * as typesData from './types.json';
import * as relationData from './relations.json';

const types = (<any>typesData);
const relations = (<any>relationData);


export function createMock(router) {
    ratesMock(router);
    relationCollectionMock(router);
}

function ratesMock(router) {
    router.get("/api/collection-type", (req, res) => {
        console.log("GET /collection-type");
        res.json(types);
    });
}

function relationCollectionMock(router: any) {
    router.get("/api/mixed-order-configuration", (req, res) => {
        console.log("GET /mixed-order-configuration");
        res.json(relations);
    });
}



