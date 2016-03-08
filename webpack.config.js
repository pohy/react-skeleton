/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};
