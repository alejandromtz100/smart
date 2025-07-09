const mongoose = require('mongoose');

const MovimientoSchema = new mongoose.Schema({
    movimiento: String,
    x: Number,
    y: Number,
    z: Number,
    ritmo_cardiaco: Number,  // ⬅️ Nuevo campo agregado
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movimiento', MovimientoSchema);
