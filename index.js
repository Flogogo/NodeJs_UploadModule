// En faisant cela on recupere en quelque sorte le dode qui se trouve dans les pages que l'on charge. 
// Cela nous permet donc de gérer notre code en module.

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// On met nos fonction dans un tableau a clef / value, Les values sont en faite les fonctions que l'on envoie de 
// La page Request Handler vers notre Serveur. et clef correspond a /request que l'on recupere dans l'url (Cela 
// servira a selectionner la fonction de requestHandler.js qu'il faut )
var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);