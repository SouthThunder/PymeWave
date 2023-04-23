// se importa express
import express from 'express';
// se importa cors
import cors from 'cors';

//importar la conexion a la base de datos
import db from './database/db.js';

// importar los enrutadores
import homeRoutes from './routes/Home.routes.js';
import aboutUs from './routes/aboutUs.routes.js';
import busqueda from './routes/busqueda.routes.js';
import singIn from './routes/singIn.routes.js';
import singInEmpresa from './routes/singInEmpresa.routes.js';
import singInPersona from './routes/singInPersona.routes.js';
import singUp from './routes/singUp.routes.js';
import singUpEmpresa from './routes/singUpeEmpresa.routes.js';
import singUpPersona from './routes/singInPersona.routes.js';

const app = express();

app.use( cors() );
app.use(express.json());

//uso de rutas
app.use('/Home', homeRoutes);// utiliza la ruta /home como base a los controladores de ruta de Home.routes.js
app.use('/AboutUs',aboutUs);
app.use('/Busqueda',busqueda);
app.use('/SingIn',singIn);
app.use('/SingIn/Empresa',singInEmpresa);
app.use('/SingIn/Persona',singInPersona);
app.use('/SingUp',singUp);
app.use('/SingUp/Empresa',singUpEmpresa);
app.use('/SingUp/Persona',singUpPersona);


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

