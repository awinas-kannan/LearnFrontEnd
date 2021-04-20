var http =  require('http');
var dt =    require('./myfirstmodule');
var url =   require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  

  // value returned from the module
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("</br>");
  
  
  //Get Url
  res.write(req.url);
  res.write("</br>");

  //Split Url Params
  urlDetails(req)
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt);
  res.write("</br>");

  res.end();
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

//alert('end');
}