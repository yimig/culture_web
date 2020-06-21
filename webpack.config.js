let path = require('path')
module.exports = {
    entry:"./index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.png||\.jpg$/,
                use: [
                    { loader: 'file-loader', options: {
                            name: 'img/[name].[ext]',
                        } }
                ]
            }
        ]
    }
}