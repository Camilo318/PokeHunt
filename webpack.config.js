const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name][contentHash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.png',
            inject: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    },
    
    resolve: {
        extensions: ['.jsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/images'
                    }
                }
            }
        ]
    }
}
