'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

//express 
const express = require('express')
const app = express()
const login = require('../database/login.json') //默认登录帐号
const countries = require('../database/countries.json') //世界地区短号薄
const message = require('../database/messages.json')  // 消息对话列表
const contact = require('../database/contact.json')  // 联系人列表
const publics = require('../database/public.json')    //公众号
const stateFns = require('../database/stateFns.json') //动态 功能列表

// fs 
const fs = require('fs')
const vueServerRenderer = require('vue-server-renderer')
const filePath = path.join(__dirname, '../database/login.json')
const code = fs.readFileSync(filePath,'utf8')

//console.log(code)


var apiRouter = express.Router()
app.use('/myserver',apiRouter)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before (app) {
      app.post('/myserver/login', (req,res) => {
        let data = login.main
        res.json({
          errno:0,
          data
        })
        //console.log(data)
      })
      app.get('/myserver/countries', (req,res) => {
        let data = countries.main
        res.json({
          errno:0,
          data
        })
        //console.log(data)
      })
      app.get('/myserver/contact', (req,res) => {
        let data = contact.main
        res.json({
          errno:0,
          data
        })
      })
      app.get('/myserver/public', (req,res) => {
        let data = publics.main
        res.json({
          erron:0,
          data
        })
      })
      app.get('/myserver/message',(req,res) => {
        let data = message.main
        let example = message.example
        //console.log(example)
        res.json({
          err:0,
          data
        })
      })
      app.get('/myserver/stateFns',(req,res) => {
        let data = stateFns.main
        let example = stateFns.example
        //console.log(example)
        res.json({
          err:0,
          data
        })
      })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: path.resolve('favicon.ico'),
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
