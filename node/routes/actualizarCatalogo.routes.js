import express from 'express';


import { createCatal, getAllCatals, updateCatal, getAllCatal } from '../controllers/CatalogoController.js';

const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/:id_empresa_catalogo', getAllCatal);
router.post('/', createCatal);
router.put('/:id_empresa_catalogo', updateCatal);


export default router;