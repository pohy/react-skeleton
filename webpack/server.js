/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/12/2016.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDev = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

app.use(webpackDev(compiler, {
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true},
    publicPath: config.output.publicPath,
    noInfo: true
}));

app.use(webpackHot(compiler));

//app.use('/public', express.static('public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(config.output.path, 'index.html'));
});

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
