/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
var path = require('path');
var webpack = require('webpack');

var basePath = '..';

module.exports = {
    entry: [
        // IE hot reload
        // 'eventsource-polyfill',
        'webpack-hot-middleware/client',
        path.join(__dirname, basePath, 'src/browser/index.js')
    ],
    output: {
        path: path.join(__dirname, basePath, 'build'),
        filename: 'app.js',
        publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    env: {
                        development: {
                            //plugins: ['react-transform'],
                            //extra: {
                            //    'react-transform': {
                            //        transforms: [{
                            //            transform: 'react-transform-hmr',
                            //            imports: ['react'],
                            //            locals: ['module']
                            //        }, {
                            //            transform: 'react-transform-catch-errors',
                            //            imports: ['react', 'redbox-react']
                            //        }]
                            //    }
                            //}
                            presets: ['react-hmre']
                        }
                    }
                }
            }, {
                test: /\.s?css$/,
                loader: 'style!css!postcss!sass'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
