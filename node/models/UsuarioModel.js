// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';
// importar relaciones 
import CalificacionesModel from './CalificacionesModel.js'

const UsusarioModel = db.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    correo: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
        },
    nombre: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: { 
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    contraseña: { 
        type: DataTypes.STRING,
        allowNull: false
    },
});

UsusarioModel.hasMany(CalificacionesModel, {
    foreignKey: 'id_usuario'
});
CalificacionesModel.belongsTo(UsusarioModel, {
    foreignKey: 'id_usuario'
});

export default UsusarioModel;
