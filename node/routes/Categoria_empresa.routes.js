import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllCate_ems} from '../controllers/Categoria_empresaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllCate_ems);


export default router;