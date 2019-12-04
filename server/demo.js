
let user = require('./user') // require规范

console.log(`userName:${user.username}`)

let http = require('http')
let url = require('url')
let util = require('util')
let server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain ; charset=utf-8')
  util.inspect(url.parse(req.url))
  res.end('Hello, Node.js服务启动成功')
})
// 创建一个服务器server
// 监听服务器窗口
server.listen(3000, '127.0.0.1', () => {
  console.log('node服务器调用成功，请打开浏览器输入http://127.0.0.1:3000/ 前去访问')
})
