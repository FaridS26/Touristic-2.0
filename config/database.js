const mongoose = require("mongoose");
const connectionString = `mongodb+srv://Turistic-admin:ciclo4ruta2@turistic.mnbttyx.mongodb.net/Turistic?retryWrites=true&w=majority`


  mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
  }).catch(err => {
    console.log(err)
  });

  
  
  

