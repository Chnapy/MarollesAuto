const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

const extractSCSS = new ExtractTextPlugin("styles.css");

const IS_DEV = process.argv.indexOf('-p') === -1;
const CLEAR = process.env.npm_lifecycle_event.substr(0, 5) === 'build';

const dest = IS_DEV ? './build' : './dist';

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, dest),
        filename: 'build.js',
        // publicPath: path.resolve(__dirname, './public')
    },
    // postcss: function(webpack) {
    //     return [
    //         postcssImport({
    //             addDependencyTo: webpack
    //         }),
    //         postcssUrl(),
    //         autoprefixer({
    //             browsers: ['last 2 versions']
    //         })
    //     ];
    // },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // publicPath: './public',
                        // useRelativePath: true,
                        exclude: /node_modules/,
                        name: 'img/[name].[ext]?[hash]'
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader?-autoprefixer', /*'postcss-loader',*/ 'sass-loader']
                })
                // use: [{
                //     loader: "style-loader" // creates style nodes from JS strings
                // }, {
                //     loader: "css-loader" // translates CSS into CommonJS
                // }, {
                //     loader: "sass-loader" // compiles Sass to CSS
                // }]
            },
            {
                test: /\.woff2?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        minetype: 'application/font-woff',
                        name: 'font/[name].[ext]?[hash]'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'font/[name].[ext]?[hash]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        overlay: true,
        open: true
    },
    plugins: [
        extractSCSS,
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (!module.exports.plugins) {
    module.exports.plugins = [];
}

if (CLEAR) {
    module.exports.plugins = [new CleanWebpackPlugin([dest])].concat(module.exports.plugins);
}

if (!IS_DEV) {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = module.exports.plugins.concat([
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '""'
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
} else {
    // module.exports.plugins.push(new webpack.DefinePlugin({
    //     'process.env': {
    //         'NODE_ENV': '""'
    //     }
    // }));
}
