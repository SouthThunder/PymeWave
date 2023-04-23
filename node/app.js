// se importa express
import express from 'express';
// se importa cors
import cors from 'cors';

//importar la conexion a la base de datos
import db from './database/db.js';

// importar el enrutador 
import homeRoutes from './routes/Home.routes.js';
import usuarioRoutes from './routes/Usuario.routes.js';
import catalagoRoutes from './routes/Catalogo.routes.js';
import productoRoutes from './routes/Producto.routes.js';
import dominioRedRoutes from './routes/DominiosRed.routes.js';
import categoriaEmpRoutes from './routes/Categoria_empresa.routes.js';
import calificacionesRoutes from './routes/Calificaciones.routes.js';
import categoriaRoutes from './routes/Categoria.routes.js';

const app = express();

app.use( cors() );
app.use(express.json());

// utiliza la ruta /home como base a los controladores de ruta de Home.routes.js
app.use('/Home', homeRoutes);

// utiliza la ruta /Usuario como base a los controladores de ruta de Usuario.routes.js
app.use('/Usuario',usuarioRoutes);

// utiliza la ruta /Catalogos como base a los controladores de ruta de Catalogo.routes.js
app.use('/Catalogo', catalagoRoutes);


app.use('/Producto',productoRoutes);


app.use('/Domino_red', dominioRedRoutes);


app.use('/Categoria_Emp', categoriaEmpRoutes);


app.use('/Calificaciones', calificacionesRoutes);


app.use('/Categoria', categoriaRoutes);

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

