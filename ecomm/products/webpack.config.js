const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        // mount funtion을 가져오려면 직접 bootstrap.js를 지정
        './ProductsIndex': './src/bootstrap.js',
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
