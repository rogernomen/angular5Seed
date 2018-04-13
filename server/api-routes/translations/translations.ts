///<reference path="../../typings.d.ts"/>

export function createMock(router) {
    translationsMock(router);
}

function translationsMock(router) {
    router.get("/api/translation/all/:lang", (req, res) => {
        console.log("GET /translation/all");
        console.log(req.params.lang);
        import('./'+ req.params.lang + '-lang.json').then(translationData => {
        res.json(translationData);
        });
    });
}




