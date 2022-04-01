const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const tailwindcss = require("tailwindcss");
const autoprefix = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.tsx',
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    watchOptions: {
        poll: 1000,
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-typescript',
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(css|s[c,a]ss)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [tailwindcss("./tailwind.config.js"), autoprefix],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
    ],
}