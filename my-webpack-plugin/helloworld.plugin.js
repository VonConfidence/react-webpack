function HelloWorldPlugin(options) {
  // 使用配置（options）设置插件实例
  console.log('--------Constructor--------', options);
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    console.log('Hello World!');
  });
};

module.exports = HelloWorldPlugin;
