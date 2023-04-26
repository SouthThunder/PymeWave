// se importa el modelo de datos correspondiente al controlador

import CatalModel from "../models/CatalogoModel.js";


// Metodos para CRUD


//Mostrar todos los registros 

export const getAllCatals = async (req,res) => {

    try {
        const  catals = await CatalModel.findAll({
            attributes: { exclude: ['id'] }
        });
        res.json(catals);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getAllCatal = async (req,res) => {

    try {
        const catal = await CatalModel.findAll({
            where:{id:req.params.id}
        });
        res.json(catal);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createCatal = async (req,res) => {

    try {
        await CatalModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateCatal = async (req,res) =>{

    try {
        await CatalModel.update(req.body, {
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

export const deleteCatal = async (req,res) =>{

    try {
        await CatalModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}