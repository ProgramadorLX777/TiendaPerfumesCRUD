// Clientes:
const { Router } = require('express');
const router = Router();
const Clientes = require('../db/controller/controllerClientes')

// INSERTAR CLIENTES:
router.post('/createClientes', async (req, res) => {
    try {
        const nuevoCliente = await Clientes.insertarClientes(req.body.rut_cliente,req.body.nombre_cliente,req.body.apellido_cliente,req.body.region_cliente,req.body.comuna_cliente,req.body.villa_pasaje,req.body.numero_casa_depto,req.body.fono_cliente);
        res.status(200).json({message: 'Ingresado Correctamente',id: nuevoCliente.insertId})
    } catch (error) {
        console.error('Error al agregar cliente!!', error);
        res.status(500).json({ error: 'Error al agregar cliente!!' });
    }
});

// OBTENER CLIENTES:
router.get('/selectClientes/:id_cliente', async (req, res) => {
    try {
        const obtenerClientes = await Clientes.obtenerClientes(req.params.id_cliente);
        res.status(200).json({message: 'Registro obtenido Correctamente!!', clientes: obtenerClientes});
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener clientes!!' });
    }
});

// ACTUALIZAR CLIENTES:
router.put('/updateClientes', async (req, res) => {
    try {
        const actualizarCliente = await Clientes.actualizarCliente(req.body.id_cliente, req.body.rut_cliente, req.body.nombre_cliente, req.body.apellido_cliente, req.body.region_cliente, req.body.comuna_cliente,  req.body.villa_pasaje, req.body.numero_casa_depto, req.body.fono_cliente);
        res.status(200).json({message: 'Cliente actualizado correctamente', clientes: actualizarCliente});
    } catch (error) {
        console.error('Error al actualizar clientes!!', error);
        res.status(500).json({ error: 'Error al actualizar clientes!!' });
    }
});

// ELIMINAR CLIENTES:
router.delete('/deleteClientes', async (req, res) => {
    try {
        const eliminarCliente = await Clientes.eliminarCliente(req.body.id_cliente);
        res.status(200).json({message: 'Eliminado Correctamente!!', id_cliente: eliminarCliente.insertId})
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: 'Error al eliminar cliente!!' });
    }
});

module.exports = router
