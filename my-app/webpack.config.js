const path = require('path');
const webpack = require('webpack');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env)
    })
   ],
 };