// se importa el modelo de datos correspondiente al controlador

import CateModel from "../models/CategoriaModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllCates = async (req,res) => {

    try {
        const  cates = await CateModel.findAll({
            attributes: { exclude: ['id'] }
        });
        res.json(cates);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getCate = async (req,res) => {

    try {
        const cate = await CateModel.findAll({
            where:{id:req.params.id}
        });
        res.json(cate);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createCate = async (req,res) => {

    try {
        await CateModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateCate = async (req,res) =>{

    try {
        await CateModel.update(req.body, {
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

export const deleteCate = async (req,res) =>{

    try {
        await CateModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}