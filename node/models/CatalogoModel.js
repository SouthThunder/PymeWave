// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';
// importar relaciones
import ProductoModel from './ProductoModel.js';


const CatalogoModel = db.define('catalogo', {
    id_empresa_catalogo: { 
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    }, //checked
    descripcion_empresa: { 
        type: DataTypes.STRING,
        allowNull: true
    } //checked
});

//relaciones 
    // relación Catalogo - Producto
        CatalogoModel.hasMany(ProductoModel, {
            foreignKey: 'id_catalogo'
        });
        ProductoModel.belongsTo(CatalogoModel, {
            foreignKey: 'id_catalogo'
        });

export default CatalogoModel;