var http = require("http");
var url = require("url");

function start(route, handle)
{
  function onRequest(request, response)
  {
 	var pathname = url.parse(request.url).pathname;
	route(response, handle, pathname);

 
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;