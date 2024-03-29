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

import singUp from './routes/singUp.routes.js';
import singUpEmpresa from './routes/singUpeEmpresa.routes.js';
import singUpPersona from './routes/singUpPersona.routes.js';
import cates from './routes/categorias.routes.js';
import busqcates from './routes/busquedaCate.routes.js';
import cambiconEmp from './routes/cambiarConEm.routes.js';
import cambiconPer from './routes/cambiarConPer.routes.js';
import cambiardatPer from './routes/cambiardatosPer.routes.js'
import cambiardatEmp from './routes/cambiardatosEmp.routes.js'
import productos from './routes/productos.routes.js'
import actualizarCatalogos from './routes/actualizarCatalogo.routes.js'

const app = express();

app.use( cors() );
app.use(express.json());

//uso de rutas
app.use('/', homeRoutes);// utiliza la ruta /home como base a los controladores de ruta de Home.routes.js
app.use('/AboutUs',aboutUs);
app.use('/Busqueda',busqueda);
app.use('/SignIn/persona',singIn);
app.use('/SignIn/empresa',singInEmpresa);

app.use('/SingUp',singUp);
app.use('/SingUp/Empresa',singUpEmpresa);
app.use('/SingUp/Persona',singUpPersona);
app.use('/Cate/gorias',cates);
app.use('/Busq/cate',busqcates);
app.use('/CambioCon/empresa',cambiconEmp);
app.use('/CambioCon/persona',cambiconPer);
app.use('/Cambiodat/Persona',cambiardatPer);
app.use('/Cambiodat/Empresa',cambiardatEmp);
app.use('/Productos',productos);
app.use('/Actualizar/Catalogos',actualizarCatalogos);


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

