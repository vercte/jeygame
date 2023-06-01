const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

console.log('process.env.npm_package_version', process.env.npm_package_version)

module.exports = [
    {
        entry: './src/index.ts',
        devtool: 'inline-source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'jeygame.js',
            libraryExport: 'default',
            globalObject: 'this',
            library: {
                name: 'Jeygame',
                type: 'umd',
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
            }),
            new webpack.DefinePlugin({
                __VERSION__: JSON.stringify(process.env.npm_package_version),
            })
        ],
        devServer: {
            client: {
                overlay: false,
            }
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
    }
];