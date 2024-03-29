import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getAllEmpres, getEmp, getEmpById, updateEmp2} from '../controllers/EmpresaController.js';
import { joinCatalsEmpre } from '../controllers/EmpresaController.js';
import {obtenerEmpresasDeBelleza} from '../controllers/EmpresaController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/:id_empresa', getEmpById);
router.put('/:id_empresa',updateEmp2);




export default router;