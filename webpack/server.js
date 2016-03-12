/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/12/2016.
 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const config = require('./webpack.config.babel.js');

const app = express();
const compiler = webpack(config);

app.use(webpackDev(compiler, {
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true},
    publicPath: config.output.publicPath,
    noInfo: true
}));

app.use(webpackHot(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(config.output.path, 'index.html'));
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});
