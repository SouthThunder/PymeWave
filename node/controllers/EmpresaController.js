// se importa el modelo de datos correspondiente al controlador

import EmpModel from "../models/EmpresaModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllEmpres = async (req,res) => {

    try {
        const  empres = await EmpModel.findAll();
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