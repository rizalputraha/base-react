const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR,
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                include: path.SRC_DIR,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                include: path.SRC_DIR,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 8080
    },
    plugins: [new UglifyJSPlugin()]
};