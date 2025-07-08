const Movimiento = require('./models/movimiento');

exports.guardarMovimiento = async (req, res) => {
    try {
        const { movimiento, x, y, z, ritmo } = req.body; // 💓 Agregado `ritmo`
        const nuevo = new Movimiento({ movimiento, x, y, z, ritmo }); // 💓 También aquí
        await nuevo.save();
        res.status(201).json({ message: 'Movimiento guardado correctamente' });
    } catch (err) {
        console.error('Error al guardar movimiento:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
