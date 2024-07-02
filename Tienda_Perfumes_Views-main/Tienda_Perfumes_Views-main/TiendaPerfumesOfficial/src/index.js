// Definiciones de variables de nuestro servidor:
const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/config');
const connection = require('./db/database');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const router = express.Router();

// Objetos del sistema:
const app = express();
const port = 5000;

// Settings:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(routes)
app.use(bodyParser.json());

// Manejo de errores rutas
app.use((err, req, res, next) => {
    console.error('[!] Error:', err.stack);
    res.status(500).send('Error interno del servidor!!');
});

// Ruta GET para obtener los productos de la base de datos
router.get('/productos', async (req, res) => {
    const query = 'SELECT * FROM productos';
    connection.query(query)
        .then(([rows, fields]) => {
            res.render('productos', { titulo: "Productos", productos: rows });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

// ESTE SI FUNCIONA:
// Ingreso y muestra de datos POST en la tabla productos:
app.post('/productos', (req, res) => {
    const { cboGeneroProducto, cboNombreProducto, cboMlProducto } = req.body;

    // Muestra los datos en la consola
    console.log('Genero del producto:', cboGeneroProducto);
    console.log('Nombre del producto:', cboNombreProducto);
    console.log('Cantidad ML del producto:', cboMlProducto);

    // Inserta los datos en la base de datos
    const query = 'INSERT INTO productos (nombre_producto, genero_producto, cantidad_ml) VALUES (?, ?, ?)';
    connection.query(query, [cboNombreProducto, cboGeneroProducto, cboMlProducto], (err, result) => {
        if (err) {
            console.error('[!] Error al insertar producto:', err);
            res.status(500).send('Error al insertar producto');
            return;
        }
        console.log('[*] Producto insertado con ID:', result.insertId);
        res.redirect('/productos'); // Redirecciona a la ruta que muestra la tabla de productos
        //res.send('Datos de productos recibidos y guardados correctamente!!!');
    });
});

// Ingreso y muestra de datos POST en la tabla proveedores:
app.post('/proveedores', (req, res) => {
    const rutProveedor = req.body.txt_rut_proveedor;
    const nombreProveedor = req.body.txt_nombre_proveedor;
    const regionProveedor = req.body.cbo_region_proveedor;
    const comunaProveedor = req.body.cbo_comuna_proveedor;
    const numeroLocalProveedor = req.body.txt_numero_local_proveedor;
    const fonoProveedor = req.body.txt_fono_proveedor;

    console.log('Rut proveedor:', rutProveedor);
    console.log('Nombre proveedor:', nombreProveedor);
    console.log('Region proveedor:', regionProveedor);
    console.log('Comuna proveedor:', comunaProveedor);
    console.log('Numero Local proveedor:', numeroLocalProveedor);
    console.log('Fono proveedor:', fonoProveedor);

    const query = 'INSERT INTO proveedores (rut_proveedor, nombre_proveedor, region_proveedor, comuna_proveedor, numero_local, fono_proveedor) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [rutProveedor, nombreProveedor, regionProveedor, comunaProveedor, numeroLocalProveedor, fonoProveedor], (err, result) => {
        if (err) throw err;
        console.log('[*] Proveedor insertado con ID:', result.insertId);
    });

    res.send('Datos de Proveedores recibidos correctamente!!!');
});

// Ingreso y muestra de datos POST en la tabla clientes:
app.post('/clientes', (req, res) => {
    const rutCliente = req.body.txt_rut_cliente;
    const nombreCliente = req.body.txt_nombre_cliente;
    const apellidoCliente = req.body.txt_apellido_cliente;
    const regionCliente = req.body.cbo_region_cliente;
    const comunaCliente = req.body.cbo_comuna_cliente;
    const villaCliente = req.body.txt_villa_pasaje_cliente;
    const numeroCasaCliente = req.body.txt_numero_casa_departamento_cliente;
    const fonoCliente = req.body.txt_fono_cliente;

    console.log('Rut cliente:', rutCliente);
    console.log('Nombre cliente:', nombreCliente);
    console.log('Apellido cliente:', apellidoCliente);
    console.log('Region cliente:', regionCliente);
    console.log('Comuna cliente:', comunaCliente);
    console.log('Villa o Pasaje cliente:', villaCliente);
    console.log('Numero Casa cliente:', numeroCasaCliente);
    console.log('Fono cliente:', fonoCliente);

    // Insertar los datos en la base de datos (actualizar la consulta según la estructura de su base de datos)
    const query = 'INSERT INTO clientes (rut_cliente, nombre_cliente, apellido_cliente, region_cliente, comuna_cliente, villa_pasaje, numero_casa_depto, fono_cliente) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [rutCliente, nombreCliente, apellidoCliente, regionCliente, comunaCliente, villaCliente, numeroCasaCliente, fonoCliente], (err, result) => {
        if (err) throw err;
        console.log('[*] Cliente insertado con ID:', result.insertId);
    });

    res.send('Datos de Clientes recibidos correctamente!!!');
});

// Ingreso y muestra de datos POST en la tabla pedidos:
app.post('/pedidos', (req, res) => {
    const cantidadComprar = req.body.txt_cantidad_pedido;
    const tipoPago = req.body.cbo_tipo_pago_pedido;
    const fechaPedido = req.body.txt_fecha_pedido;
    const metodoEnvio = req.body.txt_metodo_envio;
    const estadoPedido = req.body.txt_estado_pedido;
    const ciudadEntrega = req.body.txt_ciudad_entrega;

    console.log('Cantidad a comprar:', cantidadComprar);
    console.log('Tipo de pago:', tipoPago);
    console.log('Fecha del pedido:', fechaPedido);
    console.log('Metodos de envio:', metodoEnvio);
    console.log('Estado del pedido:', estadoPedido);
    console.log('Ciudad de entrega:', ciudadEntrega);

    // Insertar los datos en la base de datos (actualizar la consulta según la estructura de su base de datos)
    const query = 'INSERT INTO pedidos (cantidad_comprar, tipo_de_pago, fecha_pedido, metodo_envio, estado_pedido, ciudad_entrega) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [cantidadComprar, tipoPago, fechaPedido, metodoEnvio, estadoPedido, ciudadEntrega], (err, result) => {
        if (err) throw err;
        console.log('[*] Pedido insertado con ID:', result.insertId);
    });

    res.send('Datos de Pedidos recibidos correctamente!!!');
});

// Modelo de plantillas de vistas:  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Definicion de puerto de escucha del servidor:
app.listen(port, () => {
    console.log(`[*] Servidor Iniciado en: http://localhost:${port}`);
});

module.exports = router;