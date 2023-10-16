import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllEmpres,createEmp} from '../controllers/EmpresaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllEmpres);
router.post('/', createEmp);


export default router;