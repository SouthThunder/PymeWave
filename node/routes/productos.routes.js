import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { createProduct, deleteProduct, getAllProducts, getProduct} from '../controllers/ProductoController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
router.get('/', getAllProducts);
router.get('/:id_catalogo', getProduct);
router.delete('/:id_producto',deleteProduct);
router.post('/',createProduct);


export default router;