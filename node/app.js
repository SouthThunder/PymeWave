// se importa express
import express from 'express';
// se importa cors
import cors from 'cors';

//importar la conexion a la base de datos
import db from './database/db.js';

// importar el enrutador 
import homeRoutes from './routes/Home.routes.js'


const app = express();

app.use( cors() );
app.use(express.json());

// utiliza la ruta /home como base a los controladores de ruta de Home.routes.js
app.use('/Home', homeRoutes);

// conexion

try {
    await db.authenticate();
    console.log('Conexion exitosa a la BD');
} catch (error) {
    console.log(`el error es: ${error}`);
}

// app.get('/',(req,res)=>{
//     res.send('Hola mundo');
// });


app.listen(8000, ()=>{
    console.log('Server Up running in http://localhost:8000/');
});

