//importar express para utilizar en el enrutador
import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllUsers} from '../controllers/UsuarioController.js'

const router = express.Router();

router.get('/', getAllUsers);