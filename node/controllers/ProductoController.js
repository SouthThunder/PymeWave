// se importa el modelo de datos correspondiente al controlador

import ProductModel from "../models/ProductoModel.js";

// Metodos para CRUD

//Mostrar todos los registros 

export const getAllProducts = async (req,res) => {

    try {
        const  products = await ProductModel.findAll({
            attributes: { exclude: ['id'] }
        });
        res.json(products);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Mostrar un registro

export const getProduct = async (req,res) => {

    try {
        const product = await ProductModel.findAll({
            where:{id:req.params.id}
        });
        res.json(product);
    } catch (error) {
        res.json( {message: error.message});
    }

};

//Crear un registro

export const createProduct = async (req,res) => {

    try {
        await ProductModel.create(req.body);
        res.json({
            "message":" !Registro creado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}

//Actualizar un registro

export const updateProduct = async (req,res) =>{

    try {
        await ProductModel.update(req.body, {
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

export const deleteProduct = async (req,res) =>{

    try {
        await ProductModel.destroy({
            where: { id: req.params.id} 
        });
        res.json({
            "message":" !Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message});
    }

}