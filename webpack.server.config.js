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
    publicPath: '/assets/',
  },
  // 配置规则
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板文件
      filename: 'index.html', // 注入脚本后文件的名称
      inject: 'body', // 将脚本注入到body的底部 (head, true, body, false)
    }),
  ],
};