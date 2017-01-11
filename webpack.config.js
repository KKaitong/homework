/**
 * Created by User on 2017/1/5.
 */
var webpack = require('webpack');   //为了添加插件 声明全局变量
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/js/index');
var BUILD_PATH = path.resolve(ROOT_PATH, 'assets');

module.exports = {

    devtool: 'eval-source-map',            //配置生成Source Maps，选择合适的选项  这样出错以后就会采用source-map的形式直接显示你出错代码的位置。

    entry:APP_PATH,  // __dirname + "/src/index.js",   //已多次提及的唯一入口文件
    output: {
        path: BUILD_PATH,//__dirname + "/assets",      //打包后的文件存放的地方
        filename: "bundle.js"             //打包后输出文件的文件名
    },


    module: {
        loaders: [                        //在配置文件里添加JSON loader
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                // include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',            //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['react', 'es2015']
                },
                env: {
                    development: {
                        plugins: [["react-transform", {
                            transforms: [{
                                transform: "react-transform-hmr",

                                imports: ["react"],

                                locals: ["module"]
                            }]
                        }]]
                    }
                }
            },
            // {
            //     test: /\.css$/,
            //     // loader: 'style!css'         //添加对样式表的处理
            //     // loader: 'style!css?modules',//跟前面相比就在后面加上了?modules
            //     loader: 'style!css?modules!postcss'
            // }
        ]
    },


    resolve: {
        // 你现在可以使用 ``require('file')`` 来代替 ``require('file.coffee')`` 。
        extensions: ['', '.js', '.json', '.coffee', '.jsx']
    },

    // postcss: [
    //     require('autoprefixer')     //调用autoprefixer插件 自动添加前缀的插件
    // ],

    //插件
    plugins: [
        // new webpack.BannerPlugin("测试用的插件 啦啦啦.")//在这个数组中new一个就可以了
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            // template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.ProvidePlugin({     //全局的jquery
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],


    // 配置本地的服务器
    devServer: {
        contentBase: "./src/js/",    //本地服务器所加载的页面所在的目录 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        colors: true,               //终端中输出结果为彩色
        historyApiFallback: true,   //不跳转
        inline: true,               //实时刷新
        port: "8080",                //设置默认监听端口，如果省略，默认为”8080“
        hot: true,
    }
};
