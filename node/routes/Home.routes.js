import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllEmpres, getEmp, updateEmp} from '../controllers/EmpresaController.js';
import { joinCatalsEmpre } from '../controllers/EmpresaController.js';
import {obtenerEmpresasDeBelleza} from '../controllers/EmpresaController.js';




const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', joinCatalsEmpre);
router.get('/:nombre_empresa', getEmp);
router.put('/:id_empresa',updateEmp);




export default router;
