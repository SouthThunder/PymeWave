import express from 'express';

// importar el controlador que se va a utilizar en las ruta
import { getUser,updateUser2} from '../controllers/UsuarioController.js';


const router = express.Router();

// ruta a la que va ha hacer referencia , metodo
//router.get('/', getAllUsers);
router.get('/:correo',getUser);
router.put('/:id_usuario',updateUser2);


export default router;