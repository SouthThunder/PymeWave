// importar la base de datos
import db from '../database/db';
// importar sequelize
import { DataType, DataTypes } from 'sequelize';


const CatalModel = db.define('catalogo', {
    id_empresa: { type: DataTypes.INTEGER},
    descripcion: { type: DataTypes.STRING},
    id_catalogo: { type: DataTypes.INTEGER},
});

export default CatalModel;