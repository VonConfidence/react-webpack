const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpackDevConfig = require('./webpack.server.config');
// const compiler = webpack(webpackDevConfig);
const path = require('path');
const app = express();

// // attach to the compiler & the serve
// app.use(webpackDevMiddleware(compiler, {
//   // public path should be the same with webpack config
//   publicPath: webpackDevConfig.output.publicPath,
//   noInfo: true,
//   stats: {
//     colors: true,
//   },
// }));
// app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res)=> {
  console.log('%%%%%%%%%%%%%%%%%%%',req.url);
  res.sendFile(path.resolve(__dirname, 'dist','index.html'));
});

app.listen(3000);