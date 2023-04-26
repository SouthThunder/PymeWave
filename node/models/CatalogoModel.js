// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const CatalModel = db.define('catalogo', {
    id_empresa: { type: DataTypes.INTEGER}, //checked
    descripcion_empresa: { type: DataTypes.STRING}, //checked
    id_catalogo: { type: DataTypes.INTEGER, primaryKey: true}, //checked
});

export default CatalModel;