const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');



module.exports = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test:/\.html$/,
                exclude:/node_modules/,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading:'blocking',
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
  };