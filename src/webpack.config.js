const webpack = require('webpack');
var path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    entry: [
        './assets/js/index',
    ],

    output: {
        // where you want your compiled bundle to be stored
        path: path.resolve('./assets/bundles/'), 
        // naming convention webpack should use for your files
        filename: '[name]-[hash].js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

});
