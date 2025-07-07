const express = require('express');
const router = express.Router();
const { guardarMovimiento } = require('../movimientocontroller');

router.post('/', guardarMovimiento);

module.exports = router;
