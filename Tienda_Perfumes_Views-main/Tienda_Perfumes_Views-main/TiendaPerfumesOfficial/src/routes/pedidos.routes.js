// Pedidos:
const { Router } = require('express');
const router = Router();
const Pedido = require('../db/controller/controllerPedidos')

// INSERTAR PEDIDOS:
router.post('/createPedidos', async (req, res) => {
    try {
        const nuevoPedido = await Pedido.insertarPedido(req.body.id_producto_comprar,req.body.cantidad_comprar,req.body.tipo_de_pago,req.body.fecha_pedido);
        res.status(200).json({message: 'Ingresado Correctamente',id: nuevoPedido.insertId})
    } catch (error) {
        console.error('Error al insertar pedido ', error);
        res.status(500).json({ error: 'Error al insertar pedido' });
    }
});

// OBTENER PEDIDOS:
router.get('/selectPedidos/:id_pedido', async (req, res) => {
    try {
        const obtenerPedidos = await Pedido.obtenerPedidos(req.params.id_pedido);
        res.status(200).json({message: 'Pedido obtenido Correctamente!!', pedido: obtenerPedidos});
    } catch (error) {
        console.error('Error al obtener pedido:', error);
        res.status(500).json({ error: 'Error al obtener pedido!!' });
    }
});

// ACTUALIZAR PEDIDOS:
router.put('/updatePedidos', async (req, res) => {
    try {
        const actualizarPedido = await Pedido.actualizarPedido(req.body.id_pedido, req.body.id_producto_comprar, req.body.cantidad_comprar, req.body.tipo_de_pago, req.body.fecha_pedido);
        res.status(200).json({message: 'Pedido actualizado correctamente', pedido: actualizarPedido});
    } catch (error) {
        console.error('Error al actualizar pedido!', error);
        res.status(500).json({ error: 'Error al actualizar pedido!' });
    }
});

// ELIMINAR PEDIDOS:
router.delete('/deletePedidos', async (req, res) => {
    try {
        const eliminarPedido = await Pedido.eliminarPedido(req.body.id_pedido);
        res.status(200).json({message: 'Eliminado Correctamente!!', id_pedido: eliminarPedido.insertId})
    } catch (error) {
        console.error('Error al eliminar pedido:', error);
        res.status(500).json({ error: 'Error al eliminar pedido!!' });
    }
});

module.exports = router
