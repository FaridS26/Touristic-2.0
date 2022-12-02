const mongoose = require('mongoose')
const SitioTuristico = require("../models/sitioTuristico.model");
let response ={
	msg: "",
	exito: false
}

exports.create = function(req,res){
  new SitioTuristico(
    {
      nombre : req.body.nombre,
      region : req.body.region,
      imagen : req.body.imagen,
      description : req.body.description,
      video: req.body.video,
      ubicacion : req.body.ubicacion,
      precio: req.body.precio,
      sitioFavorito: req.body.sitioFavorito
    })
    sitioturisitico.save().then(result => {
      console.log(result)
      mongoose.connection.close()
    }).catch(err => {
      console.error(err)
    })  
  }

    exports.find = function(req,res){
      SitioTuristico.find({region: req.params.region}).then(result =>{
        res.json(result)
      })
    }


// const sitioturisitico = new sitioTuristico(
//   {
//     nombre : "Valle de Cocora",
//     region : "pacifica",
//     imagen : "https://www.whereismykiwi.com/wp-content/uploads/2020/04/portada-valle-del-cocora-xl.jpg",
//     description : "Este sitio es maravilloso",
//     video: "Aqui va el video",
//     ubicacion : "Aqui va la ubicacion",
//     precio: "Este es el precio",
//     sitioFavorito: false
//   })
//   sitioturisitico.save().then(result => {
//     console.log(result)
//     mongoose.connection.close()
//   }).catch(err => {
//     console.error(err)
//   })