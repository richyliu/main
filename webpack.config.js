const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
		historyApiFallback: true
	}
}
