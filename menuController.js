const { response } = require('express');
const Menu = require('./Models/Menu');
const Restaurante = require('./Models/Restaurante');




const indexMenus = async (request, response) => {
    try {
        const menus = await Menu.find({});

        response.status(200).send(menus)
    } catch (error) {
        console.error(error)
    }
}


const createMenu = async (request, response) => {

    try {
        const { nombre, categorias, restauranteId } = request.body;
        console.log(restauranteId);
        const restaurante = await Restaurante.findById(restauranteId);

        const newMenu = new Menu({ nombre, categorias, restaurante: restaurante._id });
        const savedMenu = await newMenu.save();
        restaurante.menus = restaurante.menus.concat(savedMenu._id);
        await restaurante.save();
        response.status(201).send(savedMenu);

    }catch (error) {
        console.log({ message: error });
    }
}


const readMenu = async (request, response) => {
    try {
        const {id} = request.params;
        const menu = await Menu.findById(id);

        if(!menu){
            response.status(404).send({
                error: 'No se encontró ningún registro en la BD.'
            })
        }

        response.status(200).send(menu);
    } catch (error) {
        console.log(error);
    }
}


const updateMenu = async (request, response) => {
    try {
        const {id} = request.params;
        const bodyParams = {...request.body}

        const updateMenu = await Menu.findByIdAndUpdate(id, bodyParams, { new: true })
        response.status(201).send(updateMenu);
    } catch (error) {
        console.error(error);
    }
}


const deleteMenu = async (request, response) => {
    try {
        const {id} = request.params;

        const deleteMenu = await Menu.findByIdAndDelete(id);

        if(!deleteMenu){
            response.status(404).send({
                error: 'No se encontró ningún registro en la BD.'
            })
        }

        response.status(201).send({message: 'Registro Eliminado Correctamente.'});
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    indexMenus,
    createMenu,
    readMenu,
    updateMenu,
    deleteMenu
}