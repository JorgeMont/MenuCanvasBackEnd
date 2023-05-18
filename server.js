require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const conexion = require("./conexion");
const generateUploadURL = require("./s3");

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 3030);

app.use("/api/usuario", require("./Rutas/usuario-rutas"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/s3Url", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
