// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const CatalogoModel = db.define('catalogo', {
    id_empresa_catalogo: { 
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    }, //checked
    descripcion_empresa: { 
        type: DataTypes.STRING,
        allowNull: true
    } //checked
});

export default CatalogoModel;