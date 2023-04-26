// se importa el modelo de datos correspondiente al controlador

import CalifModel from "../models/CalificacionesModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllCalifs = async (req,res) => {

    try {
        const  califs = await CalifModel.findAll({
            attributes: { exclude: ['id'] }
        });
        res.json(califs);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getAllCalif = async (req,res) => {

    try {
        const calif = await CalifModel.findAll({
            where:{id:req.params.id}
        });
        res.json(calif);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createCalif = async (req,res) => {

    try {
        await CalifModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateCalif = async (req,res) =>{

    try {
        await CalifModel.update(req.body, {
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

export const deleteCalif = async (req,res) =>{

    try {
        await CalifModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}