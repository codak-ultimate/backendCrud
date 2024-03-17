const app=require('./app');
require('dotenv').config();
require('./database');


//logica para ejecutar el servidor
async function main(){
    await app.listen(app.get('port'))
    console.log(`Server on port ${app.get('port')}`)
}
main();