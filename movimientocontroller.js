const Movimiento = require('./models/movimiento');

exports.guardarMovimiento = async (req, res) => {
    try {
        const { movimiento, x, y, z, ritmo_cardiaco } = req.body;
        const nuevo = new Movimiento({ movimiento, x, y, z, ritmo_cardiaco });
        await nuevo.save();
        res.status(201).json({ message: 'Movimiento guardado correctamente' });
    } catch (err) {
        console.error('Error al guardar movimiento:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
