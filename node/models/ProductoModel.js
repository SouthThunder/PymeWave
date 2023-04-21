// importar la base de datos
import db from '../database/db';
// importar sequelize
import { DataType, DataTypes } from 'sequelize';


const ProductModel = db.define('producto', {
    descripcion: { type: DataTypes.STRING},
    id_catalogo: { type: DataTypes.INTEGER},
    nombre: { type: DataTypes.STRING},
    id_producto: { type: DataTypes.INTEGER},
});

export default ProductModel;