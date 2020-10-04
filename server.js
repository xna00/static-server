var http = require('http')
var fs = require('fs')
var url = require('url')
const { PassThrough } = require('stream')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  path = 'public' + path;
  console.log(path);
  path = path === 'public/' ? path + 'index.html' : path;
  if (fs.existsSync(path)) {
    response.statusCode = 200
  } else {
    response.statusCode = 404
    path = 'public/404.html'
  }
  contentType = {
    html: 'text/html',
    xml: 'text/xml'
  }
  console.log(path);
  response.setHeader('Content-Type', (contentType[path.substring(path.indexOf('.') + 1)] || 'text/html') + ';charset=utf-8')
  response.write(fs.readFileSync(path))
  response.end()
  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

