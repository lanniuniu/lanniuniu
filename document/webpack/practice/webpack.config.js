/**
 * Created by 懒牛牛 on 2017/3/29.
 */
let webpack = require('webpack');
// let path = require('path');

module.exports  = {
    /*
    入口文件
     */
    entry: {
        app : [
            __dirname + '/app/script/index.js',
        ]
    },
    /*
    打包输出
     */
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist/',
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: __dirname,
    },
    /*
    加载器配置
     */
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader',
            }
        ],
    },
    /*
    插件系统
     */
    plugins: [

    ]
};