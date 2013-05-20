function start() 
{
	console.log("Request handler 'start' was called.");

		// Fonction bloquante, Elle nous permet de nous rendre compte que si personne sont sur le site web. 
		// Si une requet est bloquante, Alors tout les utilisateurs du site web sont eux aussi bloqué.
		// (Meme si ils n'apellent pas une fonction bloquantes (Cela est du au fait qu'il n'y a qu'un seul thread))
		function sleep(milliSeconds) 
		{
			var startTime = new Date().getTime();
			while (new Date().getTime() < startTime + milliSeconds);
		}

		sleep(10000);

	return "Hello Start";
}
function upload() 
{
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}


exports.start = start;
exports.upload = upload;