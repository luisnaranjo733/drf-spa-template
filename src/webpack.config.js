const webpack = require('webpack');
var path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

    devtool: 'source-map',

    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],

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
