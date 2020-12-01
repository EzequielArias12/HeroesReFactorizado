const express = require('express');
const router = express.Router();
const controller = require('../controller/heroesController');

router.get('/heroe',controller.mostrarJSON);
router.get('/detalle/:id',controller.detalle);
router.get('bio/:id/:ok?',controller.bio);

module.exports = router