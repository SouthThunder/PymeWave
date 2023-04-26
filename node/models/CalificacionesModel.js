// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const CalifModel = db.define('calificaciones', {
    num_estrellas: { type: DataTypes.INTEGER},
    resena: { type: DataTypes.STRING},
    id_calificacion: { type: DataTypes.INTEGER},
    id_empresa: { type: DataTypes.INTEGER},
    correo: { type: DataTypes.INTEGER}, 
});

export default CalifModel;