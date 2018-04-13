///<reference path="../../typings.d.ts"/>
import * as data from './countries.json';

const countries = (<any>data);

export function createMock(router) {
    countriesMock(router);
}

function countriesMock(router) {
    router.get("/api/country", (req, res) => {
        console.log("GET /country");
        res.json({countries});
    });
}




