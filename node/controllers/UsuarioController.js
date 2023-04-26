// se importa el modelo de datos correspondiente al controlador

import UserModel from "../models/UsuarioModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllUsers = async (req,res) => {

    try {
        const  users = await UserModel.findAll({
            attributes: { exclude: ['id'] }
        });
        res.json(users);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getUser = async (req,res) => {

    try {
        const user = await UserModel.findAll({
            where:{id:req.params.id}
        });
        res.json(user);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createUser = async (req,res) => {

    try {
        await UserModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateUser = async (req,res) =>{

    try {
        await UserModel.update(req.body, {
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

export const deleteUser = async (req,res) =>{

    try {
        await UserModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

