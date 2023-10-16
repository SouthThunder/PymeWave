import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllUsers, getUser } from '../controllers/UsuarioController.js';
import { getAllEmpres } from '../controllers/EmpresaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/:correo', getUser);


export default router;