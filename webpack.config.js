// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    devServer: {
        port: 3000,
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader'],
            }
        ],
    }
}