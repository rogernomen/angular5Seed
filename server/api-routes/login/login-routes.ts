///<reference path="../../typings.d.ts"/>
import * as loginOKData from './login_OK_200.json';
import * as loginIncorrectPasswordData from './login_incorrect_password_KO_500.json';
import * as loginIncorrectUsernameData from './login_incorrect_username_KO_500.json';
import * as logoutOKData from './logout_OK_200.json';
import * as logoutUnauthorizedData from './logout_unauthorized_KO_401.json';

const loginOK = (<any>loginOKData);
const loginIncorrectPassword = (<any>loginIncorrectPasswordData);
const loginIncorrectUsername = (<any>loginIncorrectUsernameData);
const logoutOK = (<any>logoutOKData);
const logoutUnauthorized = (<any>logoutUnauthorizedData);


export function createMock(router) {
    loginMock(router);
    logoutMock(router);
}

function loginMock(router) {
    router.post('/api/login', (req, res) => {
        console.log('POST /api/login');
        if (req.body.username && req.body.username === req.body.password) {
            res.json(loginOK);
        } else {
            if (req.body.username === 'incorrect') {
                res.status(500).json(loginIncorrectUsername);
            } else {
                res.status(500).json(loginIncorrectPassword);
            }
        }
    });
}

function logoutMock(router) {
    router.post('/api/logout', (req, res) => {
        console.log('POST /api/logout');
        if (req.headers.authorization) {
            res.json(logoutOK);
        } else {
            res.status(401).json(logoutUnauthorized);
        }
    });
}