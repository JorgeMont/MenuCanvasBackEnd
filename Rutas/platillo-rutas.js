const express = require("express");
const router = express.Router();
const {ObjectID} = require("mongodb");

const platilloSchema = require("../Models/Platillo");

router.post ('/', async (req, res)=>{
    const platillo = platilloSchema(req.body);
    await platillo
        .save()
        .then((data)=>{
            console.log(data);
        }
        ).catch(err =>{
            console.log({message: err});
        });
        console.log("Done")
});

//get all dishes
router.get ('/', async (req, res)=>{
    try {
        const platillos = await platilloSchema.find({})

        res.status(200).send(platillos)
    }catch(error){
        console.log(error)
    }

});

//get one dish 
router.get ('/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const platillo = await platilloSchema.findById(id)

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

        const updatedDish = await platilloSchema.findByIdAndUpdate(id, bodyParams, {new: true})

        res.status(201).send(updatedDish)
    }catch(error){
        console.log(error)
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const deletedDish = await platilloSchema.findByIdAndDelete(id)

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