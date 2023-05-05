// se importa el modelo de datos correspondiente al controlador

import UsusarioModel from "../models/UsuarioModel.js";
import CalificacionesModel from '../models/CalificacionesModel.js';

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllUsers = async (req,res) => {
    try {
        const  users = await UsusarioModel.findAll({
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
        const user = await UsusarioModel.findAll({
            where:{correo:req.params.correo}

        });
        res.json(user);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createUser = async (req,res) => {

    try {
        const usuario = await UsusarioModel.create(req.body);
        res.json({
          message: '¡Registro creado correctamente!',
          usuario: usuario,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}

//Actualizar un registro

export const updateUser = async (req,res) =>{

    try {

        const { contraseña } = req.body;
        const updateObject = { contraseña };
        
        await UsusarioModel.update(updateObject, {
            where: {id_usuario: req.params.id_usuario}

        });
        console.log(req.params.id_usuario);
        res.json({
            "message":" !Registro actualizado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

};

export const updateUser2 = async (req, res) => {
    try {
        const { nombre, correo, telefono, apellidos } = req.body;
        const updateObject = { nombre, correo, telefono, apellidos };
        await UsusarioModel.update(updateObject, {
            where: { id_usuario: req.params.id_usuario }
        });
        res.json({
            message: "Registro actualizado correctamente"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

//Eliminar un registro

export const deleteUser = async (req,res) =>{

    try {
        await UsusarioModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

