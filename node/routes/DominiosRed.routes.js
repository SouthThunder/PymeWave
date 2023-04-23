import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllDoms} from '../controllers/Dominios_redController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllDoms);


export default router;