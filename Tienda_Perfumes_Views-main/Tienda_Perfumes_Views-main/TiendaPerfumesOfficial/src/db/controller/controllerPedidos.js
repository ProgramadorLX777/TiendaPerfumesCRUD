// ControllerPedidos.js
const mysql = require('mysql2');
const conn = require('../conexion');

// Definir la tabla a utilizar:
const TABLA = "pedidos";

// Función controller para Insertar Clientes:
function insertarPedido(id_producto_comprar, cantidad_comprar, tipo_de_pago, fecha_pedido) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} VALUES (null,'${id_producto_comprar}', '${cantidad_comprar}', '${tipo_de_pago}', '${fecha_pedido}')`;
        console.log(query);
        conn.query(query,(error, results) => {
            if (error) {
                console.error('Error al insertar el pedido!!', error);
                return reject(error);
            }
            // Si la inserción es exitosa, envía una respuesta adecuada
            resolve({ message: 'Pedido creado exitosamente!!', results });
        });
    });
}

// Función controller para obtener Clientes:
function obtenerPedidos(id_pedido, id_producto_comprar, cantidad_comprar, tipo_de_pago, fecha_pedido) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id_pedido =?`;
        console.log(query);
        conn.query(query, [id_pedido, id_producto_comprar, cantidad_comprar, tipo_de_pago, fecha_pedido],   (error, results) => {
            if (error) {
                console.error('Error al obtener el pedido!!', error);
                return reject(error);
            }
            // Si la consulta es exitosa, envía una respuesta adecuada
            resolve({ message: 'Pedido obtenido exitosamente!!', results });
        });
    });
}

// Función controller para actualizar Pedidos:
function actualizarPedido(id_pedido, id_producto_comprar, cantidad_comprar, tipo_de_pago, fecha_pedido) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET id_producto_comprar =?, cantidad_comprar =?, tipo_de_pago =?, fecha_pedido=?  WHERE id_pedido ='${id_pedido}'`;
        console.log(query);
        conn.query(query, [id_producto_comprar, cantidad_comprar, tipo_de_pago, fecha_pedido], (error, results) => {
            if (error) {
                console.error('Error al actualizar el pedido!!', error);
                return reject(error);
            }
            // Si la actualización es exitosa, envía una respuesta adecuada
            resolve({ message: 'Pedido actualizado exitosamente!!', results });
        });
    });
}

// Función controller para eliminar Pedidos:
function eliminarPedido(id_pedido) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id_pedido ='${id_pedido}'`;
        console.log(query);
        conn.query(query,[id_pedido],(error, results) => {
            if (error) {
                console.error('Error al eliminar el pedido!!', error);
                return reject(error);
            }
            // Si la eliminación es exitosa, envía una respuesta adecuada
            resolve({ message: 'Pedido eliminado exitosamente!!', results });
        });
    });
}

module.exports = { insertarPedido, obtenerPedidos, actualizarPedido, eliminarPedido };