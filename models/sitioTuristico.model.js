const mongoose  = require("mongoose");
const {Schema, model} = mongoose

const SitioTuristicoSchema = new Schema({
  nombre: { type: String, required: true, max: 200 },
  region: { type: String, required: true, max: 9 },
  imagen: { type: String, required: true },
  description: { type: String, required: true },
  video: { type: String, required: true },
  ubicacion: { type: String, required: true },
  precio: { type: String, required: true },
  sitioFavorito: { type: Boolean, required: true }
});

const sitioTuristico = model('sitioturistico',SitioTuristicoSchema)
module.exports = sitioTuristico
