// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const UserModel = db.define('usuarios', {
    correo: { type: DataTypes.STRING},
    nombre: { type: DataTypes.STRING},
    apellidos: { type: DataTypes.STRING},
    telefono: { type: DataTypes.STRING},
    username: { type: DataTypes.STRING},
    contraseña: { type: DataTypes.STRING},
});

export default UserModel;


