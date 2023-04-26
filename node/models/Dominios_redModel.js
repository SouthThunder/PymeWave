// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const Dom_redModel = db.define('dominios_red', {
    dominio_red: { type: DataTypes.STRING},
    id_empresa: { type: DataTypes.INTEGER},
});

export default Dom_redModel;