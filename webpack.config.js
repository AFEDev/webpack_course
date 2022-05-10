const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require ('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const TerserWebpackPlugin = require ('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require ('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new CssMinimizerWebpackPlugin ()
        ]
    }
    return config
}

const filename = ext => isDev? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

module.exports = {
context: path.resolve(__dirname, 'src'),
mode: 'development',
entry: {
   main: ['@babel/polyfill', './index.js'],
   analytics: './analytics.js',
},
output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
},
resolve: {
extensions: ['.json', '.js'],
alias: {
    '@models': path.resolve(__dirname, 'src/models'),
    '@': path.resolve(__dirname, 'src'),
},
},
optimization: optimization(),
devServer: {
port: 4200,
hot: isDev
},
plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
        {
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to:path.resolve(__dirname, 'dist')
        }
    ]
}),
new MiniCssExtractPlugin ({
    filename: filename('css')
})
],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jps|svg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.xml$/,
                loader: 'xml-loader',
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env']
                    }
                }
            }
        ]
    }
}