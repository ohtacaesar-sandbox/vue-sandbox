'use strict';

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};