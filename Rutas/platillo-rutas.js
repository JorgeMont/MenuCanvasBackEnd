const express = require("express");
const router = express.Router();
const {ObjectID} = require("mongodb");

const Platillo = require("../Models/Platillo");
const Menu = require("../Models/Menu");

router.post ('/', async (req, res)=>{

    try{
        const {nombre, precio, descripcion, categoria, foto, menuId} = req.body;
        const menu = await Menu.findById(menuId);

        const newPlatillo = new Platillo({nombre, precio, descripcion, categoria, foto, menu: menu._id});
        const savedPlatillo = await newPlatillo.save()

        menu.platillos = menu.platillos.concat(savedPlatillo._id);
        await menu.save();
        res.status(201).json({msg: 'Menú creado correctamente.'});

    }catch(error){
        console.log({ message: error })
    }
});

//get all dishes
router.get ('/', async (req, res)=>{
    try {
        const platillos = await Platillo.find({}).populate('menu', {
            nombre: 1,
            categorias: 1
          });

        res.status(200).send(platillos)
    }catch(error){
        console.log(error)
    }

});



//get one dish 
router.get ('/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const platillo = await Platillo.findById(id).find({}).populate('menu', {
            nombre: 1,
            categorias: 1
          });

        if (!platillo){
            response.status(404).send({
                error: "no se encontro platillo"
            })
        }
        res.status(200).send(platillo)
    }catch(error){
        console.log(error)
    }
    
})

router.patch('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const bodyParams = {...req.body}

        const updatedDish = await Platillo.findByIdAndUpdate(id, bodyParams, {new: true})

        res.status(201).send(updatedDish)
    }catch(error){
        console.log(error)
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const deletedDish = await Platillo.findByIdAndDelete(id)

        if (!deletedDish){
            res.status(404).send({
                error: "no se ha encontrado el platillo"
            })
        }
        res.status(204).send({message: "Registro eliminado correctamente"})
    }catch(error){
        console.log(error)
    }
})






module.exports = router;