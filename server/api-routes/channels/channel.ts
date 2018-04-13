///<reference path="../../typings.d.ts"/>
import * as channelData from './channels-area.json';
import * as organizationsData from './organizations-channel.json';

const channels = (<any>channelData);
const organizations = (<any>organizationsData);


export function createMock(router) {
    channelAndOrganitzationMock(router);
}

function channelAndOrganitzationMock(router) {
    router.get('/api/mark', (req, res) => {
        if (req.query.type === 'TIPO_AREA') {
            console.log('GET /mark?type=TIPO_AREA');
            res.json(channels);
        } else {
            console.log('GET /mark?salesChannel=IDAREA000001&type=ORGANIZACION_VENTA');
            res.json(organizations);
        }
    });
}





