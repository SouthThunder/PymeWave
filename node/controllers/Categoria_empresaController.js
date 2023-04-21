// se importa el modelo de datos correspondiente al controlador

import Cate_emModel from "../models/Categoria_empresaModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllCate_ems = async (req,res) => {

    try {
        const  cate_ems = await Cate_emModel.findAll();
        res.json(cate_ems);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getCate_em = async (req,res) => {

    try {
        const cate_em = await Cate_emModel.findAll({
            where:{id:req.params.id}
        });
        res.json(cate_em);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createCate_em = async (req,res) => {

    try {
        await Cate_emModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateCate_em = async (req,res) =>{

    try {
        await Cate_emModel.update(req.body, {
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

export const deleteCate_em = async (req,res) =>{

    try {
        await Cate_emModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}