// Productos:
const express = require('express');
const router = express.Router();
const controllerProductos = require('../db/controller/controllerProductos');

// INSERTAR PRODUCTOS LISTO:
router.post('/createProductos', async (req, res) => {
    try {
        const nuevoProducto = await Producto.insertarProducto(req.body.nombre_producto,req.body.cantidad_ml,req.body.precio_producto);
        res.status(200).json({message: 'Ingresado Correctamente!!',id: nuevoProducto.insertId})
    } catch (error) {
        console.error('Error al insertar producto!!', error);
        res.status(500).json({ error: 'Error al insertar producto!!' });
    }
});

// Ruta para mostrar la lista de productos
/*router.get('/productos', (req, res) => {
    // Consulta SQL para obtener los productos
    const query = 'SELECT * FROM productos';
    connection.query(query, (err, results) => {
      if (err) throw err;
  
      // Pasa los datos de los productos a la vista
      res.render('productos', { productos: results });
    });
});*/

// OBTENER PRODUCTOS:
router.get('/selectProductos', async (req, res) => {
    try {
        const producto = await controllerProductos.obtenerProductos();
        res.status(200).json({message: 'Registro obtenido Correctamente!!', producto: obtenerProductos});
    } catch (error) {
        console.error('Error al obtener productos!!', error);
        res.status(500).json({ error: 'Error al obtener producto!!' });
    }
});

// Ruta para mostrar la lista de productos
// Ruta para mostrar la lista de productos
router.get('/productos', async (req, res) => {
    try {
        const productos = await controllerProductos.obtenerProductos();
        res.render('productos', { productos: productos });
    } catch (error) {
        console.error('Error al obtener productos!!', error);
        res.status(500).json({ error: 'Error al obtener producto!!' });
    }
});

// ACTUALIZAR PRODUCTOS:// ACTUALIZAR PRODUCTOS:
// Ruta para actualizar un producto
router.get('/updateProducto/:id_producto', async (req, res) => {
    try {
      const { id_producto } = req.params;
      const { genero_producto, nombre_producto, cantidad_ml } = req.body;
  
      const producto = await Producto.findByPk(id);
  
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      await producto.update({ genero_producto, nombre_producto, cantidad_ml });
  
      res.status(200).json({ message: 'Producto actualizado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).jjson({ message: 'Error al actualizar el producto' });
    }
  });


// ELIMINAR PRODUCTOS LISTOS:
router.post('/deleteProducto/:id_producto', async (req, res) => {
    try {
        const id_producto = req.params.id_producto;  // Obtener el id desde los parámetros de la URL
        const rowsAffected = await controllerProductos.eliminarProducto(id_producto);
        if (rowsAffected > 0) {
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });  
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
});

module.exports = router

