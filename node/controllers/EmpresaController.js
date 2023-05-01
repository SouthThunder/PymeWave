// se importa el modelo de datos correspondiente al controlador

import { Model } from "sequelize";
import { Op } from 'sequelize';
import Sequelize from 'sequelize';
import EmpresaModel from "../models/EmpresaModel.js";
import UserModel from "../models/UsuarioModel.js";
import CatalogoModel from "../models/CatalogoModel.js";
import CategoriaModel from "../models/CategoriaModel.js";
import Categoria_empresaModel from "../models/Categoria_empresaModel.js";


export const obtenerEmpresasDeBelleza = async (req, res) =>{
    try {
        const empresas = await EmpresaModel.findAll({
            attributes: [
                ['id_empresa', 'id_empresa'],
                ['nombre_empresa', 'nombre_empresa'], 
                [Sequelize.col('catalogo.descripcion_empresa'), 'descripcion_empresa']
            ],
            include: [
                {
                    model: CatalogoModel,
                    attributes: [],
                    where: {
                        id_empresa_catalogo: Sequelize.col('empresa.id_empresa')
                    }
                },
                {
                    model: Categoria_empresaModel,
                    attributes: [],
                    where: {
                        id_empresa: Sequelize.col('empresa.id_empresa')
                    },
                    include: [
                        {
                            model: CategoriaModel,
                            attributes: [],
                            where: {
                                nombre: req.params.categoria
                            }
                        }
                    ]
                }
            ]
        });
        res.json(empresas);
    } catch (error) {
        res.json({message: error.message});
    }
}


// Metodos para CRUD
export const joinCatalsEmpre = async (req, res) =>{
    try {
        const empres = await EmpresaModel.findAll({
            attributes: { exclude: ['id'] },
            include: CatalogoModel // This is for left outer join 
            //include: {model: CatalModel, required: true} -> This is for inner join
        });
        res.json(empres);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Mostrar todos los registros 

export const getAllEmpres = async (req,res) => {

    try {
        const  empres = await EmpresaModel.findAll({
            attributes: { exclude: ['id'] }
        });

        //forma de hacerlo con dos tablas
        //const  users = await UserModel.findAll({ 
        //    attributes: { exclude: ['id'] }
        //});
        //res.json({empres,users});
        
        res.json(empres);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getEmp = async (req,res) => {

    try {
        const emp = await EmpresaModel.findAll({
            where:{nombre_empresa:req.params.nombre_empresa}
        });
        res.json(emp);
    } catch (error) {
        res.json( {message: error.message});
    }

};





//Crear un registro

export const createEmp = async (req,res) => {

    try {
        await EmpresaModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateEmp = async (req,res) =>{

    try {
        const { contraseña } = req.body;
        const updateObject = { contraseña };
        
        await EmpresaModel.update(updateObject, {
            where: {id_empresa: req.params.id_empresa}
        });
        console.log(req.params.id_empresa);
        res.json({
            "message":" !Registro actualizado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Eliminar un registro

export const deleteEmp = async (req,res) =>{

    try {
        await EmpresaModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}