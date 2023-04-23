const express = require("express");
const router = express.Router();

const Restaurante = require("../Models/Restaurante");

router.post("/Restaurante", async (req, res) => {
  console.log("Restaurante Post");
  //  console.log(req.nombre);
  const { nombre, Maps, telefono, logo, fb, wa, ig } = req.body;
  console.log(req.body);

  const restaurante = new Restaurante({
    nombre,
    Maps,
    telefono,
    logo,
    fb,
    wa,
    ig,
  });
  await restaurante
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log({ message: err });
    });
  console.log("Done");
});

router.get("/Restaurante/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const post = await Restaurante.findById(id);

    if (!Restaurante) {
      response.status(404).send({
        error: "No se encontro ningún registro en la base de datos",
      });
    }
    response.status(200).send(post);
  } catch (error) {
    next(error);
  }
});

router.put("/Restaurante/:id", async (request, response) => {
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

router.delete("Restaurante/:id", async (req, res) => {
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
