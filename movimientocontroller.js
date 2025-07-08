const Movimiento = require('./models/movimiento');

exports.guardarMovimiento = async (req, res) => {
    try {
        console.log("📩 Datos recibidos:", req.body); // 👈

        const { movimiento, x, y, z, ritmo } = req.body;
        const nuevo = new Movimiento({ movimiento, x, y, z, ritmo });
        await nuevo.save();

        res.status(201).json({ message: 'Movimiento guardado correctamente' });
    } catch (err) {
        console.error('Error al guardar movimiento:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

