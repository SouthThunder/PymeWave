// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const CalificacionesModel = db.define('calificaciones', {
    num_estrellas: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reseña: { 
        type: DataTypes.STRING,
        allowNull:true
    },
    id_calificacion: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_empresa: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default CalificacionesModel;