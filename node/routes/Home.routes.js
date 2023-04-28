import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllEmpres, getEmp} from '../controllers/EmpresaController.js';
import { joinCatalsEmpre } from '../controllers/EmpresaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', joinCatalsEmpre);
router.post('/:nombre_empresa', getEmp);


export default router;
