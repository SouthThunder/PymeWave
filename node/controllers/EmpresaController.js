// se importa el modelo de datos correspondiente al controlador

import { Model } from "sequelize";
import EmpresaModel from "../models/EmpresaModel.js";
import UserModel from "../models/UsuarioModel.js";
import CatalogoModel from "../models/CatalogoModel.js";

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
        const  empres = await EmpModel.findAll({
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
        const emp = await EmpModel.findAll({
            where:{id:req.params.id}
        });
        res.json(emp);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createEmp = async (req,res) => {

    try {
        await EmpModel.create(req.body);
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
        await EmpModel.update(req.body, {
            where: {id: req.params.id}
        });
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
        await EmpModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}