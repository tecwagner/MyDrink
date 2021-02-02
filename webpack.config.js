const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //caminho do arquivo inicial
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'        
    },
    devServer: {
        port: 8082,
        contentBase: './public'
    },
    //Template da aplicação
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    //Referencias para carregamento de jQuery
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery' : 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            // Estilo css
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            //extensao para fonte
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            //carregamento de arquivo
            loader: 'file'
        }]
    }

}