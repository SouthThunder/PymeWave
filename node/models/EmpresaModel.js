// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';
import CatalModel from './CatalogoModel.js';

const name= 'empresa';



const EmpModel = db.define(name, {
    nombre_empresa: { type: DataTypes.STRING}, //checked
    correo: { type: DataTypes.STRING}, //checked
    dir_fisica: { type: DataTypes.STRING}, //checked
    id_empresa: { type: DataTypes.INTEGER, primaryKey:true}, //checked
    estado_suscripcion: { type: DataTypes.TINYINT}, //checked
    calificacion: { type: DataTypes.DOUBLE}, //checked
    telefono: { type: DataTypes.STRING}, //checked
    contraseña: { type: DataTypes.STRING}, //checked
    rut: { type: DataTypes.STRING}, //checked
    id_catalogo: { type: DataTypes.INTEGER}, //checked
    id_categoria: { type: DataTypes.INTEGER} //checked
});

EmpModel.hasOne(CatalModel, {foreignKey: 'id_empresa'});
CatalModel.belongsTo(EmpModel, {foreignKey: 'id_empresa'});

export default EmpModel;