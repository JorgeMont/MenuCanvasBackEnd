const express = require('express');
const router = express.Router();

const Menu = require('../Models/Menu');

const MenuController = require('../menuController');

router.get('/', MenuController.indexMenus);
router.post('/', MenuController.createMenu);
router.get('/:id', MenuController.readMenu);
router.patch('/:id', MenuController.updateMenu);
router.delete('/:id', MenuController.deleteMenu);
 
 module.exports = router;
