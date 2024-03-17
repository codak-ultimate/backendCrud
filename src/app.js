const express=require('express');
const cors=require('cors');
const app=express();


app.set('port',process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>{
  res.send('Welcome to Home');
})

//ruta para nuestra api de usuarios
app.use('/api/usuarios',require('./routes/usuario'))

module.exports=app;