import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { obtenerEmpresasDeBelleza} from '../controllers/EmpresaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/:categorias', obtenerEmpresasDeBelleza);


export default router;