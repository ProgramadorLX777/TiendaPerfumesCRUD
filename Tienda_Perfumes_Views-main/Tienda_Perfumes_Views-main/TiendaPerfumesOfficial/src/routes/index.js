const { Router } = require('express');
const router = Router();
const connection = require('../db/database');
const controllerProductos = require('../db/controller/controllerProductos')

// INDEX <--> ROUTES <--> CONTROLADORES <-- CONEXION

router.get('/', (req, res) => {
    const titulo = "Home"
    res.render('home', { titulo })
})

// Vista Productos:
router.get('/productos', (req, res) => {
    const titulo = "Productos"
    res.render('productos', { titulo })
})

router.get('/login', (req, res) => {
    const titulo = "Login"
    res.render('login', { titulo })
})

/*router.get('/tablaProductos', (req, res) => {
    const titulo = "Tabla Productos"
    res.render('tablaProductos', { titulo })
})*/

// Ruta GET para obtener los productos de la base de datos
// Ruta para mostrar la lista de productos
// Ruta GET para obtener los productos de la base de datos
// Ruta para mostrar la lista de productos
// Ruta GET para obtener los productos de la base de datos
// Ruta para mostrar la lista de productos
router.get('/tablaProductos', async (req, res) => {
    try {
        const titulo = "Tabla Productos";
        const productos = await controllerProductos.obtenerProductos();

        console.log(productos); // Agrega un console.log para verificar los productos

        // Ya no es necesario verificar si productos es una matriz de objetos
        res.render('tablaProductos', { titulo, productos });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los productos');
    }
});

// Ruta para obtener los productos de la base de datos
router.get('/productos', async (req, res) => {
    try {
      const productos = await controllerProductos.obtenerProductos(); // Reemplaza 'controllerProductos.obtenerProductos()' con la función que consulta la base de datos
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar los productos');
    }
  });


// Actualizar productos:
router.get('/updateProductos', (req, res) => {
    const titulo = "Actualizar productos"
    res.render('productos/updateProductos', { titulo });
});

// Eliminar Productos:
router.get('/deleteProductos', (req, res) => {
    const titulo = "Eliminar Productos"
    res.render('productos/deleteProductos', { titulo });

});

// Vista Proveedores:
router.get('/proveedores', (req, res) => {
    const titulo = "Proveedores"
    res.render('proveedores', { titulo })
});

// Crear Proveedores:
router.get('/createProveedores', (req, res) => {
    const titulo = "Crear Proveedores"
    res.render('proveedores/createProveedores', { titulo });

});

// Consultar Proveedores:
router.get('/readProveedores', (req, res) => {
    const titulo = "Consultar Proveedores"
    res.render('proveedores/readProveedores', { titulo });

});

// Actualizar Proveedores:
router.get('/updateProveedores', (req, res) => {
    const titulo = "Actualizar Proveedores"
    res.render('proveedor/updateProveedores', { titulo });

});

// Eliminar Proveedores:
router.get('/deleteProveedores', (req, res) => {
    const titulo = "Eliminar Proveedores"
    res.render('proveedor/deleteProveedores', { titulo });

});

// Vista Clientes:
router.get('/clientes', (req, res) => {
    const titulo = "Clientes"
    res.render('clientes', { titulo })
})

// Crear Clientes:
router.get('/createClientes', (req, res) => {
    const titulo = "Crear Clientes"
    res.render('clientes/createClientes', { titulo });

});

// Consultar Clientes:
router.get('/readClientes', (req, res) => {
    const titulo = "Consultar Clientes:"
    res.render('clientes/readClientes', { titulo });

});

// Actualizar Clientes:
router.get('/updateClientes', (req, res) => {
    const titulo = "Actualizar Clientes:"
    res.render('clientes/updateClientes', { titulo });

});

// Eliminar Clientes:
router.get('/deleteClientes', (req, res) => {
    const titulo = "Eliminar Clientes:"
    res.render('clientes/deleteClientes', { titulo });

});

// Vista Pedidos:
router.get('/pedidos', (req, res) => {
    const titulo = "Pedidos"
    res.render('pedidos', { titulo })
})

// Crear Pedidos:
router.get('/createPedidos', (req, res) => {
    const titulo = "Crear Pedidos"
    res.render('pedidos/createPedidos', { titulo });

});

// Consultar Pedidos:
router.get('/readPedidos', (req, res) => {
    const titulo = "Consultar Pedidos:"
    res.render('pedidos/readPedidos', { titulo });

});

// Actualizar Pedidos:
router.get('/updatePedidos', (req, res) => {
    const titulo = "Actualizar Pedidos:"
    res.render('pedidos/updatePedidos', { titulo });

});

// Eliminar Pedidos:
router.get('/deletePedidos', (req, res) => {
    const titulo = "Eliminar Pedidos:"
    res.render('pedidos/deletePedidos', { titulo });

});

/*router.get('/about', (req, res) => {
    res.send('about')
})*/

// Imports: (Uno por cada archivo de rutas)
const productosRoutes = require('./productos.routes');
const proveedoresRoutes = require('./proveedores.routes');
const clientesRoutes = require('./clientes.routes');
const pedidosRoutes = require('./pedidos.routes');

// Uses: (Uno por cada archivo de rutas)
router.use(productosRoutes)
router.use(proveedoresRoutes)
router.use(clientesRoutes)
router.use(pedidosRoutes)

module.exports = router;
