const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer : {
        port: 8082,
    },
    plugins : [
        new ModuleFederationPlugin({
            name: 'cart',
            filename : 'remoteEntry.js',
            exposes: {
                './CartShow' : './src/bootstrap'
            },
            shared: ['faker']
            //     faker : {
            //         //Singleton true means that we only want to load up one single copy of Fakher no matter what.
            //         singleton: true
            //     }
            // }
        }),
        new HtmlWebpackPlugin ({
            template : './public/index.html'
        })
    ]
}