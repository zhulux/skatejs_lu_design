import webpack from 'webpack';
//import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import path from 'path';

import WebpackShellPlugin from 'webpack-shell-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    plugins: [
        new ExtractTextPlugin("lud.css", {allChunks: true}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        }),
        new WebpackShellPlugin({
          onBuildEnd: ['hologram -c config/hologram_config.yml']
        })
    ],
    entry: {
        index: './lib/lu_design/index.js'
    },
    output: {
        path: './dist/assets',
        filename: 'lud.js'
    },
    resolve: {
        root: path.resolve('./lib/lu_design'),
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {test: require.resolve("jquery"), loader: "expose?jQuery" },
            {test: require.resolve("jquery"), loader: "expose?$" },
            {test: require.resolve("lodash"), loader: "expose?_" },
            {test: require.resolve("g2"), loader: "expose?G2" },
            {test: require.resolve("turbolinks"), loader: "expose?Turbolinks" },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?camelCase!postcss-loader!sass-loader')
            },
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(bootstrap)\/).*/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
            }
        ],
        preLoaders: [
            {test: /\s[a|c]ss$/, exclude: /node_modules/, loader: 'sasslint-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader?parser=babel-eslint"}
        ]
    },
    postcss: function () {
        return [autoprefixer({ browsers: ['> 5% in CN'] })]
    }
}
