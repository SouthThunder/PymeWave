// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const ProductModel = db.define('producto', {
    descripcion: { type: DataTypes.STRING},
    id_catalogo: { type: DataTypes.INTEGER},
    nombre: { type: DataTypes.STRING},
    id_producto: { type: DataTypes.INTEGER},
});

export default ProductModel;