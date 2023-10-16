// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';

const Dominios_redModel = db.define('dominios_red', {
    dominio_red: { 
        type: DataTypes.STRING,
        allowNull: true
    },
    id_empresa: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

export default Dominios_redModel;