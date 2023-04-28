import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllCates} from '../controllers/CategoriaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllCates);


export default router;