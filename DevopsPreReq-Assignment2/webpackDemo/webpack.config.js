const path  = require('path');
module.exports = {
    //1
    entry: path.resolve(__dirname,'./src/index.js'),
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve:{
        extensions: ['*','.js']
    },
    //2
    output: {
        path: path.resolve(__dirname,'/dist'),
        filename:'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname,'./dist'),
    }
}