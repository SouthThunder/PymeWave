import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllUsers } from '../controllers/UsuarioController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllUsers);


export default router;