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
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    devtool: 'source-map',
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR,
        filename: '[name].js',
    },
    mode: process.env.NODE_ENV || 'development',
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
                include: SRC_DIR,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    // optimization: {
    //     // Automatically split vendor and commons
    //     // https://twitter.com/wSokra/status/969633336732905474
    //     // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    //     splitChunks: {
    //         chunks: 'all',
    //         name: false,
    //     },
    //     // Keep the runtime chunk seperated to enable long term caching
    //     // https://twitter.com/wSokra/status/969679223278505985
    //     runtimeChunk: true,
    // },
    devServer: {
        watchContentBase: true,
        contentBase: SRC_DIR,
        compress: true,
        port: 8080,
        hot: true
    },
    plugins: [
        // new UglifyJSPlugin({
        //     include: /dist/,
        // }),
        new HtmlWebpackPlugin({
            template: './build/index.html',
            filename: 'index.html',
            inject: true
        }),
        // new OfflinePlugin({
        //     ServiceWorker: {
        //         minify: true,
        //     }
        // }),
    ],

};
