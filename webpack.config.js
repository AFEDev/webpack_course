const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require ('clean-webpack-plugin')

module.exports = {
context: path.resolve(__dirname, 'src'),
mode: 'development',
entry: {
   main: './index.js',
   analytics: './analytics.js',
},
output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
},
plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin()
],
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jps|svg|gif)$/,
            type: 'asset/resource',
        },
        {

            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
    
          },
    ]
}
}