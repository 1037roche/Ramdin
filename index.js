var express = require('express');
var path    = require('path');
var parser  = require('body-parser');

var app 	= express();

	app.use(express.static(path.join(__dirname,'public')));
	app.use(parser.urlencoded({extended:true}));

	app.get('/preguntas', function(req , res){
		//res.render('form', {'title' : 'First Swig Template'});
		res.sendFile('form.html', {root:path.join(__dirname, '/public')});
	});

	app.post('/respuesta',function(req,res){
		
		var botonAtras = "<a href='/preguntas'>Atras</a>"
		var respuesta = (req.body.res).trim();

		if(req.body.param == 1)
		{
			if(respuesta === 'Simon Bolivar' || respuesta === 'simon bolivar' || respuesta === 'simón bolívar' || respuesta === 'Simón Bolívar' || respuesta === 'Simón bolívar' || respuesta === 'simón Bolívar')
			{
				res.send("Respuesta Correcta :)"
					   + "<br/>"
					   + botonAtras);
				
			}else
			{
				res.send("Respuesta Incorrecta :("
						+ " <br/> "
						+ "R/= Simón Bolívar"
						+ " <br/> "
						+ botonAtras);
			}
		}else
		{
			if(respuesta === 'Lisboa' || respuesta === 'lisboa')
			{
				res.send("Respuesta Correcta :)"
					   + "<br/>"
					   + botonAtras);

			}else
			{
				res.send("Respuesta Incorrecta :("
						+ " <br/> "
						+ "R/= Lisboa"
						+ " <br/> "
						+ botonAtras);
			}
		}
	});

app.listen(8000);