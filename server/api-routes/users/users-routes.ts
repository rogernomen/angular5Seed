///<reference path="../../typings.d.ts"/>
import * as data from './users.json';

const usersData = (<any>data);

export function createMock(router) {
    usersMock(router);
    userMock(router);
    userEditMock(router);
}

function usersMock(router) {
    router.get("/api/users", (req, res) => {
        console.log("GET /users");
        res.json({usersData});
    });
}

function userMock(router) {
    router.get("/api/users/:id", (req, res) => {
        const id = +req.params.id;
        console.log("GET /user", "id:", id);
        const user = usersData.filter(user => user.id === id)[0];
        res.json({user});
    });
}

function userEditMock(router) {
    router.put("/api/users/:id", (req, res) => {
        const id = +req.params.id;
        console.log("PUT /user", "id:", id);
        const user = req.body;
        res.json({user});
    });

}


