// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';
import CatalogoModel from './CatalogoModel.js';

const EmpresaModel = db.define('empresa', {
    nombre_empresa: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, //checked
    correo: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, //checked
    dir_fisica: { 
        type: DataTypes.STRING,
        allowNull:false
    }, //checked
    id_empresa: { 
        type: DataTypes.INTEGER, 
        primaryKey:true
    }, //checked
    estado_suscripcion: { 
        type: DataTypes.TINYINT,
        allowNull:false
    }, //checked
    calificacion: { 
        type: DataTypes.DOUBLE,
        allowNull: true
    }, //checked
    telefono: { 
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    }, //checked
    contraseña: { 
        type: DataTypes.STRING,
        allowNull:false
    }, //checked
    rut: { 
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    }, //checked
});

EmpresaModel.hasOne(CatalogoModel, {foreignKey: 'id_empresa'});
CatalogoModel.belongsTo(EmpresaModel, {foreignKey: 'id_empresa'});

export default EmpresaModel;