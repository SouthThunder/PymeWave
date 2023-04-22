// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const EmpModel = db.define('empresa', {
    nombre_empresa: { type: DataTypes.STRING},
    correo: { type: DataTypes.STRING},
    dir_fisica: { type: DataTypes.STRING},
    id_empresa: { type: DataTypes.INTEGER},
    estado_suscripcion: { type: DataTypes.TINYINT},
    calificacion: { type: DataTypes.DOUBLE},
    telefono: { type: DataTypes.STRING},
    contraseña: { type: DataTypes.STRING},
    rut: { type: DataTypes.STRING},
    id_catalogo: { type: DataTypes.INTEGER},
    id_categoria: { type: DataTypes.INTEGER}
});

export default EmpModel;