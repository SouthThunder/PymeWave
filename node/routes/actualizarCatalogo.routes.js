import express from 'express';


import { getAllCatals, updateCatal } from '../controllers/CatalogoController.js';

const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllCatals );
router.put('/:id_empresa_catalogo', updateCatal);


export default router;