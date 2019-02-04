const path = require('path');
// 将脚本自动注入到指定html文件的插件 yarn add html-webpack-plugin --dev
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // webpack 文件打包的入口 可以是 Array, Object, String 这里是单文件入口
  entry: './src/index.js',
  output: {
    // 打包后文件的名称  可以在里面使用 [name].bundle.js  (chunkname, chunkhash, name, filename等)
    filename: 'index.bundle.js',
    // 打包后文件存储的位置
    path: path.resolve(__dirname, './dist'),
    // 将文件打包到了dist目录下面, 在已有路径的基础上添加上 assets/index.bundle.js
    // publicPath: '/assets/'
  },
  // 配置规则
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.css$/,
        loader:['style-loader','css-loader',],
      },
    ],
  },
  devServer: {
    // 公共路径 打包后资源可以访问的路径  public:'/mypath/'  ==>  http://localhost:8080/src/index.html 可以访问
    publicPath: '/',
    // webpack-dev-server会使用当前的路径作为请求的资源路径，但是你可以通过指定content base来修改这个默认行为:
    // 本地服务器在哪个目录搭建页面，一般我们在当前目录即可
    // contentBase: './mypage/'   那么就会打开 localhost:port 的时候 默认打开的是  ./mypage/index.html
    contentBase: './',
    host: 'localhost',
    // 是否对打包的内容进行压缩
    compress: false,
    // 打开的端口
    port: 8080,
    // 当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面；
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板文件
      filename: 'index.html', // 注入脚本后文件的名称
      inject: 'body', // 将脚本注入到body的底部 (head, true, body, false)
    }),
  ],
};