const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
    mode: 'development',
    entry: {
        'home': './public/client/home.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/compiled_js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue': '@vue/runtime-dom'
        },
        extensions: [
            '.js',
            '.vue',
            '.tsx',
            '.ts'
        ]
    }, 
    plugins: [
        new VueLoaderPlugin(),
    ],
    
}

module.exports = config;

