const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: './src/components/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd"
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use:[
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                  },
                },
                'css-loader',
                'sass-loader'
            ]
        },
    ]},
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'journey-ui.min.css',
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'scss' ]
    },
};