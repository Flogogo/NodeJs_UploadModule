function route(handle, pathname, response, request) 
{
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') 
	{
		return handle[pathname](response, request);
	}
	else 
	{
    console.log("Aucun gestionnaire associé à " + pathname);
    
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Non trouvé");
    response.end();
	}
}
exports.route = route;