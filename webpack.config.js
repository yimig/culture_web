let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//开启热更新：webpack-dev-server
module.exports = {
    entry: {
        home:"./src/index.js",
        sub_1:"./src/sub_index_1.js",
        sub_2:"./src/sub_index_2.js",
        sub_3:"./src/sub_index_3.js",
        sub_4:"./src/sub_index_4.js",
        sub_5:"./src/sub_index_5.js",
        sub_6:"./src/sub_index_6.js",
        relogin:"./src/relogin_index.js"
    },
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,'build')
    },
    // mode:'development',
    mode:'production',
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/,
                resolve: {
                    alias: {
                        'vue$': 'vue/dist/vue.esm.js'
                    }
                }
            },
            {
                test:/.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit:8*1024,
                    esModule:false,
                    name:'res/img/[name].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                exclude: /\.(css|less|js|html|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name:'res/other/[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['home'],
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['sub_1'],
            filename: 'poetry_page_1.html',
            template: "./src/poetry_page.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['sub_2'],
            filename: 'poetry_page_2.html',
            template: "./src/poetry_page.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['sub_3'],
            filename: 'poetry_page_3.html',
            template: "./src/poetry_page.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['sub_4'],
            filename: 'poetry_page_4.html',
            template: "./src/poetry_page.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['sub_5'],
            filename: 'poetry_page_5.html',
            template: "./src/poetry_page.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['sub_6'],
            filename: 'poetry_page_6.html',
            template: "./src/poetry_page.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['relogin'],
            filename: 'register.html',
            template: "./src/register.html"
        }),
        new HtmlWebpackPlugin({
            chunks: ['relogin'],
            filename: 'login.html',
            template: "./src/login.html"
        }),

    ],
    devServer: {
        contentBase:path.resolve(__dirname,'build'),
        compress:true,
        //host:'0.0.0.0',
        port:3000,
        open:true
    }
}