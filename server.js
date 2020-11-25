'use strict';
require('dotenv').config();
const CLIENT_PORT = process.env.PORT || 6000;
const SUBDIR = "ui";
const path = require('path');
const express = require('express');
const server = express();
const morgan = require('morgan');
const open = require('open');

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, maximum-scale = 1.0">
        <meta http-equiv="x-ua-campatible" content="IE=edge">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
        <link rel="icon" href="favicon.ico?v=2" type="image/x-icon" />
        <link rel="shortcut" href="favicon.ico?v=2" type="image/x-icon" />
    </head>
    <body>
        <div id="root" class="root-entry"><div>
        <script src="ui/bundle.js" />
    </body>
</html>
`;

if(process.env.NODE_ENV != 'production') {
    const webpack = require('webpack');

    const config = require('./webpack/webpack.config.dev');
    const compiler = webpack(config);

    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    });

    const logger = morgan('dev');

    server.use(webpackDevMiddlewareInstance);
    server.use(logger);

    const webpackHotMiddleware = require('webpack-hot-middleware');
    server.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr', 
        heartbeat: 10 * 1000
    }));

    server.listen(CLIENT_PORT, function() {
        webpackDevMiddlewareInstance.waitUntilValid(function() {
            open(`http://localhost:${CLIENT_PORT}/${SUBDIR}`);
            console.log(process.env.NODE_ENV + ' server started at localhost:' + CLIENT_PORT);
        });
    });
} else {
    const logger = morgan('short');
    server.use(express.static(path.resolve(__dirname, 'dist')));
    server.use(logger);
    server.listen(CLIENT_PORT, function() {
        console.log('Production server started at localhost:' + CLIENT_PORT);
    });

    server.use('/ui', express.static('dist'));
    server.get('*', function(request, response) {
        response.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
}