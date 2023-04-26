// importar la base de datos
import db from '../database/db.js';
// importar sequelize
import { DataTypes } from 'sequelize';
// importar relaciones 
import CatalogoModel from './CatalogoModel.js';
import Dominios_redModel from './Dominios_redModel.js';
import Categoria_empresaModel from './Categoria_empresaModel.js';
import CalificacionesModel from './CalificacionesModel.js';

const EmpresaModel = db.define('empresa', {
    nombre_empresa: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, //checked
    correo: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, //checked
    dir_fisica: { 
        type: DataTypes.STRING,
        allowNull:false
    }, //checked
    id_empresa: { 
        type: DataTypes.INTEGER, 
        primaryKey:true
    }, //checked
    estado_suscripcion: { 
        type: DataTypes.TINYINT,
        allowNull:false
    }, //checked
    calificacion: { 
        type: DataTypes.DOUBLE,
        allowNull: true
    }, //checked
    telefono: { 
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    }, //checked
    contraseña: { 
        type: DataTypes.STRING,
        allowNull:false
    }, //checked
    rut: { 
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    }, //checked
});

//relaciones
    // relación Empresa - Catalogo
        EmpresaModel.hasOne(CatalogoModel, {
            foreignKey: 'id_empresa_catalogo'
        });
        CatalogoModel.belongsTo(EmpresaModel, {
            foreignKey: 'id_empresa_catalogo'
        });

    // relación Empresa - Dominios_red
        EmpresaModel.hasMany(Dominios_redModel, {
            foreignKey: 'id_empresa'
        });
        Dominios_redModel.belongsTo(EmpresaModel,{
            foreignKey: 'id_empresa'
        });

    // relación Empresa - Categoria_Empresa
        EmpresaModel.hasMany(Categoria_empresaModel, {
            foreignKey: 'id_empresa'
        });
        Categoria_empresaModel.belongsTo(EmpresaModel, {
            foreignKey: 'id_empresa'
        })
    
    // relación Empresa - Calificaciones
        EmpresaModel.hasMany(CalificacionesModel, {
            foreignKey: 'id_empresa'
        });
        CalificacionesModel.belongsTo(EmpresaModel ,{
            foreignKey: 'id_empresa'
        });

export default EmpresaModel;