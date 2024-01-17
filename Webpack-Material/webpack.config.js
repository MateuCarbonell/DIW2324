const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/application.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
           
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader',  
                    'sass-loader'
                ]
            }
        ]
    }, 
   
};