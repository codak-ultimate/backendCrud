const mongoose = require("mongoose");

//cadena de conexion
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/dbtest";


mongoose.connect(URI)
const conection=mongoose.connection

conection.once('open',()=>{
    console.log('Data base has conected : ',URI)
})