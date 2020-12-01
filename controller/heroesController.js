const fs = require('fs')
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

module.exports = {
	mostrarJSON : (req, res) =>{
		res.send(heroes)
	},
	detalle : (req, res)=>{
		let heroe = heroes.find(heroe=>{
        return heroes.id == req.params.id
		});
		if(heroe.id == undefined){
			res.send("Heroe no encontrado")
		}else{
	res.send(`El nombre del heroe es ${heroe[0].nombre} y su profesion es ${heroe[0].profesion}`)
		 }
	},
    bio : (req,res)=>{ (req, res) => {
		
		let heroe = heroes.filter(heroe=>{
			return heroe.id == req.params.id
		})
	if(heroe[0] == undefined){
		res.send("No encontramos un heroe para mostrar su bio")
	}else if (req.params.ok){
		res.send(`heroe:${heroe[0].nombre}\n
		||reseña: ${heroe[0].resenia}`)
	}else{
		res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber mas de mi`)
	}}
 } 
}