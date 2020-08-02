const path = require('path');

const config = {
    entry: "./client/src/index.js",
    output: {
        path: path.join(__dirname, '/client/dist/build/'), // absolute path
        publicPath: '/build/', // Relative to server root, in my case client/dist, that's the content base where my index.html and all assets live
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /client/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                //   'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: './dist/image/[name].[hash].[ext]',
                }
            },
        ]
    },
    resolve: {
        alias: {
            client: path.resolve(__dirname, './client/src')
        }
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "client/dist"), // serve front-end from localhost:3001/client/dist
    }
};

module.exports = config;