import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllProducts} from '../controllers/ProductoController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllProducts);


export default router;