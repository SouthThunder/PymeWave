// importar la base de datos
import db from '../database/db';
// importar sequelize
import { DataType, DataTypes } from 'sequelize';


const CalifModel = db.define('calificaciones', {
    num_estrellas: { type: DataTypes.INTEGER},
    resena: { type: DataTypes.STRING},
    id_calificacion: { type: DataTypes.INTEGER},
    id_empresa: { type: DataTypes.INTEGER},
    correo: { type: DataTypes.INTEGER}, 
});

export default CalifModel;