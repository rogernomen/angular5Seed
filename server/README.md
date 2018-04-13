NODE SERVER API MOCK
=======================

The purpose of the server is to mock all api calls to get the "contract" data. The server is inside of the docker, only you need to develop the mocked api.
 
 
## API development

### Folder structure
* server
    * api-routes
        * domain-to-mock
            * data.json _mocked data_
            * api-mock.ts _code to mock de api with export function "createMock"_
        * domain-to-mock
        * ...
        * api-routes.ts _code to expose the array with the mocked routes
        
        
It is possible to change the folder structure because it is mapped into the docker `- .\api-routes:/usr/src/app/api-routes`. If the folder structure is changed, it is necessary to modify that mapped line.

### Example:


* server
    * api-routes
        * groups
            * groups.json
            * groups-routes.ts
        * users
            * users.json
            * users-routes.ts
        * api-routes.ts

*groups.json*
```
 [
    {
      "id": 1,
      "name": "Group1",
      "description": "Group1 description"
    },
    {
      "id": 2,
      "name": "Group2",
      "description": "Group2 description"
    },
    {
      "id": 3,
      "name": "Group3",
      "description": "Group3 description"
    }
 ]

```

*groups.ts*

The "createMock" function is mandatory to work, the server needs a exposed function to create the mock.
```
///<reference path="../../typings.d.ts"/>
import * as data from './groups.json';

const groupsData = (<any>data);

export function createMock(router) {
    groupsMock(router);
}

function groupsMock(router) {
    router.get("/api/groups", (req, res) => {
        console.log("GET /groups");
        res.json({groupsData});
    });
}

``` 
     
*api-routes.ts*

The "mocks" array is needed that the server gets all mocks.

```
'use strict';
import * as mockGroups from './groups/groups-routes';
import * as mockUsers from './users/users-routes';

var mocks = [mockGroups, mockUsers];

export default mocks;
```

## Run
In order to correctly run the server the following steps should be executed:

1. Install Docker and start its daemon.
2. Install the Desigual's certificate in your local machine. This is required by Docker to correctly connect to the Desigual's private Docker registry and download the custom image as described below. 
3. Go to `server` folder.
4. Login into the Desigual's private Docker registry:
```docker login --username <username> --password <password> dtrdev.desigual.com/desigual/dgl_nodeservermock``` 
5. Execute `docker-compose up`, the server will execute the `yarn install` and will execute the server with the mocked api. The ports 4444 _http_ and 4443 _https_ are exposed.
 This ports can be changed, only it is necessary to change the "docker-compose.yaml" file.