// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

const Router = express.Router();

const mainRouter = require('./routes/main');

const heroesRouter = require('./routes/heroes');


app.listen(3030, () => console.log('Server running in 3030 port'));

//Rutas
app.use('/',mainRouter);

app.use('/heroes',heroesRouter);

app.get('/creditos', function(req,res){
	res.send("Autor : Ezequiel Arias")
})


app.get('*', (req, res) => {res.status(404).send
	('404 not found. <br> ¡Houston, poseemos problemas!');
});
