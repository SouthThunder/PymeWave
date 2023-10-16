// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';


const Categoria_empresaModel = db.define('categoria_empresa', {
    id_empresa: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_categoria: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

export default Categoria_empresaModel;