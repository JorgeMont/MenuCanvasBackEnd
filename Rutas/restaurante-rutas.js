const express = require("express");
const router = express.Router();
const {ObjectID} = require("mongodb");

const Restaurante = require("../Models/Restaurante");
const Usuario = require("../Models/Usuario");

router.get ('/', async (req, res)=>{
  try {
      const restaurantes = await Restaurante.find({}).populate('menus', {
        nombre: 1,
        categorias: 1,
        user: 1
      });

      res.status(200).send(restaurantes)
  }catch(error){
      console.log(error)
  }

});



router.post("/", async (req, res) => {

  try{
    const { nombre, Maps, telefono, logo, fb, wa, ig, userId } = req.body;
    const user = await Usuario.findById(userId);

    const newRestaurante = new Restaurante({nombre,Maps,telefono,logo,fb,wa,ig, user: user._id});
    const savedRestaurante = await newRestaurante.save()

    user.restaurantes = user.restaurantes.concat(savedRestaurante._id);
    await user.save();
    res.status(201).send(savedRestaurante);
  }catch (error) {
      console.log({ message: error });
    }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const restaurante = await Restaurante.findById(id).populate('menus', {
      nombre: 1,
      categorias: 1,
      user: 1
    });

    if (!restaurante) {
      response.status(404).send({
        error: "No se encontro ningún registro en la base de datos",
      });
    }
    response.status(200).send(restaurante);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const bodyParams = { ...request.body };

    const updatedRestaurant = await Restaurante.findByIdAndUpdate(
      id,
      bodyParams,
      {
        new: true,
      }
    );

    response.status(201).send(updatedRestaurant);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteRestaurante = await Restaurante.findByIdAndDelete(id);

  if (!deleteRestaurante) {
    res.status(404).send({
      error: "No se encontro ningún registro en la base de datos",
    });
  }
  res.sendStatus(204);
});

module.exports = router;

