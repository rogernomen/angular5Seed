'use strict';

import * as express from 'express';
import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';


import * as bodyParser from 'body-parser';
import * as mockLogin from './api-routes/login/login-routes';



const app = express();
const port = 4444;
const portHttps = 4443;


const privateKey = fs.readFileSync('./certs/server.key', 'utf8');
const certificate = fs.readFileSync('./certs/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const router = express.Router();

mockLogin.createMock(router);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", router);

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
httpServer.listen(port);
httpsServer.listen(portHttps);

console.log(`Server port: ${port}`);
console.log(`Server SSL port: ${portHttps}`);