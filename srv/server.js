const cds = require('@sap/cds');
const debug = require('debug')('srv:server');
const cdsSwagger = require('cds-swagger-ui-express');

cds.on('bootstrap', app => app.use((req, res, next) => {
    app.use(cdsSwagger({
        "basePath": "/swagger",
        "diagram": "true"
    }));
    next();
}));


module.exports = cds.server;