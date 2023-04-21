// importar la base de datos
import db from '../database/db';
// importar sequelize
import { DataType, DataTypes } from 'sequelize';


const CateModel = db.define('categoria', {
    nombre: { type: DataTypes.STRING},
    id_categoria: { type: DataTypes.INTEGER},
});

export default CateModel;