///<reference path="../../typings.d.ts"/>
import * as data from './price-list.json';
import * as relationData from './relations.json';

const rates = (<any>data);
const relations = (<any>relationData);


export function createMock(router) {
    ratesMock(router);
    relationRatesMock(router);
    updatePriceListRelation(router);
}

function ratesMock(router) {
    router.get('/api/price-list', (req, res) => {
        console.log('GET /price-list (rates)');
        res.json(rates);
    });
}

function relationRatesMock(router: any) {
    router.get('/api/price-list/relation', (req, res) => {
        console.log('GET /price-list/relation');
        res.json(relations);
    });
    router.post('/api/price-list/relation/remove', (req, res) => {
        console.log('REMOVE /price-list/relation/remove');
        res.json();
    });
}

function updatePriceListRelation(router: any) {
    router.post("/api/price-list/relation/update", (req, res) => {
       console.log("POST /api/price-list/relation/update");
       res.json('');
    });
}



