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
        filename: '[name].[hash].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJSPlugin({
            include: /dist/,
        }),
        new HtmlWebpackPlugin({
            template: DIST_DIR + '/index.html',
            filename: 'index.html'
        }),
        new OfflinePlugin({
            ServiceWorker: {
                minify: true,
            }
        })
    ],

};
