module.exports = {
  devServer: {
    host: 'localhost',
    port: 9090
  },
  // 配置pages
  pages: {
    index: {
      entry: 'src/main.ts', // page入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Vue学习记录 首页',
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含，提取出来的通用 chunk 和 vendor chunk。
    }
  }
}
