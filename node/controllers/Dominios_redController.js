// se importa el modelo de datos correspondiente al controlador

import Dom_redModel from "../models/Dominios_redModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllDoms = async (req,res) => {

    try {
        const  doms = await Dom_redModel.findAll();
        res.json(doms);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getDom = async (req,res) => {

    try {
        const dom = await Dom_redModel.findAll({
            where:{id:req.params.id}
        });
        res.json(dom);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createDom = async (req,res) => {

    try {
        await Dom_redModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateDom = async (req,res) =>{

    try {
        await Dom_redModel.update(req.body, {
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

export const deleteDom = async (req,res) =>{

    try {
        await Dom_redModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}