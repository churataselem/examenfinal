//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta
var models = require('../models/model.js');

exports.registroPost = function (req, res){
	var post = models.Posts.build({ nombres: "Nombres",
									
									apellido: "Apellido",
									post: "post"
								                 });

	res.render('registroPost', {titulo:'Registro de Post', post: post});
}


//escribir el codigo para devolver respuesta
exports.respuestaPost=function(rep,res)
{
	res.render('respuestaPost'),{mensaje:'post recibido'});
}

//Escribir el codigo para guardar los datos
exports.guardarPost=function(rep,res)
{
	console.log("ingresar a guardar");
	var post =models.post.build(req.body.post);
	post.save ({fields:["nombres",
		                "post",       
		                "apellido",
		                ].then(fuction(){
		                	console.log("ingresa a redirecr");
		                	res.render('respuestaPost',{mensaje:"porst recibido"});
	
}
