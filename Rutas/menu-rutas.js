const express = require('express');
const router = express.Router();

const Menu = require('../Models/Menu');

const MenuController = require('../menuController');

router.get('/menu', MenuController.MenuControl);

router.post('/', async (req, res) => {
    console.log('Post Menu');
    const { nombre, categorias } = req.body;
    console.log(req.body);
    
    const menu = new Menu({ nombre, categorias });
    await menu.save().then(data => {
       console.log(data);
    }
    ).catch(err => {
       console.log({ message: err });
    });
    console.log('Done');
 });
 
 module.exports = router;
