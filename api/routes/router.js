const express = require('express');
const path = require('path');
const routesUsers = require('./routesUsers');
// const restricted = require('../auth/restricted.js');

const apiDocsPath = path.join( __dirname, "../../docs" );


module.exports = server => {
    server.use('/api/users', routesUsers);
    server.use('/', express.static(apiDocsPath));
}

