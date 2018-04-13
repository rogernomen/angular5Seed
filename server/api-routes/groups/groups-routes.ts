///<reference path="../../typings.d.ts"/>
import * as data from './groups.json';

const groupsData = (<any>data);

export function createMock(router) {
    groupsMock(router);
    groupMock(router);
    groupEditMock(router);
}

function groupsMock(router) {
    router.get("/api/groups", (req, res) => {
        console.log("GET /groups");
        res.json({groupsData});
    });
}

function groupMock(router) {
    router.get("/api/groups/:id", (req, res) => {
        const id = +req.params.id;
        console.log("GET /group", "id:", id);
        const group = groupsData.filter(group => group.id === id)[0];
        res.json({group});
    });
}

function groupEditMock(router) {
    router.put("/api/groups/:id", (req, res) => {
        const id = +req.params.id;
        console.log("PUT /group", "id:", id);
        const group = req.body;
        res.json({group});
    });
}


