/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
module.exports = {
    entry: __dirname + '/src/browser/index.js',
    output: {
        path: __dirname + '/build/',
        filename: 'app.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.s?css$/,
                loader: 'style!css!postcss!sass'
            }
        ]
    }
};
