'use strict';

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.ts',
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
