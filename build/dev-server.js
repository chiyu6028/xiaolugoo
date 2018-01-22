
//引入配置文件
var config = require('../config')

// 如果 Node 的环境无法判断当前是 dev / product 环境
// 使用 config.dev.env.NODE_ENV 作为当前的环境
if (!process.env.NODE_ENV) {
  var env = require('../config/dev.env')
  process.env.NODE_ENV = JSON.parse(env.NODE_ENV)
}

//获取端口
var port = process.env.PORT || config.dev.port

//引入webpack
var webpack = require('webpack')

const webpackDevMiddleware = require("webpack-dev-middleware")

const webpackHotMiddleware = require("webpack-Hot-middleware")

// 使用 proxyTable
const proxyMiddleware = require('http-proxy-middleware')

// 使用 NodeJS 自带的文件路径工具
var path = require('path')

//引入webpack.dev.conf.js
var webpackConfig = require('./webpack.dev.conf')

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
// 使用 config.dev.proxyTable 的配置作为 proxyTable 的代理配置
var proxyTable = config.dev.proxyTable

//编译webpackConfig
var compiler = webpack(webpackConfig)

//引入express
var express = require('express')

//创建一个express
var app = express()

//开发时使webpack dev server 能获取(更新)到打包好的bundle js的中间件
const DevMiddleware = webpackDevMiddleware(compiler,{
	publicPath: webpackConfig.output.publicPath,
  quiet: true //向控制台显示任何内容 
})

// 启动 webpack-hot-middleware，也就是我们常说的 Hot-reload
var HotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {}
})

app.use(DevMiddleware)

app.use(HotMiddleware)

// proxy api requests
// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// serve pure static assets
// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 为静态资源提供响应服务
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})