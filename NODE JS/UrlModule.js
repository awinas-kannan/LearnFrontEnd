var http =  require('http');
var url =   require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  urlDetails(req)
  
}).listen(8080);

function urlDetails(req)
{
  console.log("Inside Url Details");
  //'http://localhost:8080/default.htm?year=2017&month=february';
  var q = url.parse(req.url, true);
console.log(q);
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month);
}