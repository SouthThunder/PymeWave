// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const Cate_emModel = db.define('categoria_empresa', {
    id_empresa: { type: DataTypes.INTEGER},
    id_categoria: { type: DataTypes.INTEGER},
});

export default Cate_emModel;