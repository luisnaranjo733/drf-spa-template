const webpack = require('webpack');
var path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

let ip = 'localhost';

module.exports = merge(common, {
    // devtool: 'inline-source-map',

    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${ip}:3000`,
        'webpack/hot/only-dev-server',
        './assets/js/index',
    ],

    output: {
        // where you want your compiled bundle to be stored
        path: path.resolve('./assets/bundles/'), 
        // naming convention webpack should use for your files
        filename: '[name]-[hash].js',
        publicPath: `http://${ip}:3000/assets/bundles/`
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), 
    ],

    module: {
        rules: [
            {
                use: [
                    {
                        loader: "react-hot-loader/webpack"
                    }
                ],
            }
        ]
    },
    
});