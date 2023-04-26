// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const ProductoModel = db.define('producto', {
    descripcion: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    id_catalogo: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    id_producto: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false
    },
});

export default ProductoModel;