// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';
// importar las dependencias
import Categoria_empresaModel from './Categoria_empresaModel.js';


const CategoriaModel = db.define('categoria', {
    nombre: { 
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    id_categoria: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
});

// relaciones
    // relación Categoría - Categoría_empresa
        CategoriaModel.hasMany(Categoria_empresaModel, {
            foreignKey: 'id_categoria'
        });
        Categoria_empresaModel.belongsTo(CategoriaModel, {
            foreignKey: 'id_categoria'
        });

export default CategoriaModel;