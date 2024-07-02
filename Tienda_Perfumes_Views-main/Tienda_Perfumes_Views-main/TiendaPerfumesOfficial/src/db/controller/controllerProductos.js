// ControllerProductos.js
const mysql = require('mysql2');
const { resolve } = require('path');
const conn = require('../conexion');
const { rejects } = require('assert');
const connection = require('../database');

// Definir la tabla a utilizar:
const TABLA ="productos"

// Función controller para Insertar Productos:
function insertarProducto(nombre_producto, cantidad_ml, precio_producto) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} VALUES (null,'${nombre_producto}', '${cantidad_ml}', '${precio_producto}')`;
        console.log(query);
        conn.query(query, (error, results) => {
            if (error) {
                console.error('Error al insertar el producto!!', error);
                return reject(error);
            }
            // Si la inserción es exitosa, envía una respuesta adecuada
            resolve({ message: 'Producto creado exitosamente!!', results });
        });
    });
}

// Función controller para obtener Productos:
function obtenerProductos() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA}`;
        console.log(query);
        conn.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener el producto!!', error);
                return reject(error);
            }
            // Si la consulta es exitosa, envía una respuesta adecuada
            resolve({ message: 'Producto obtenido exitosamente!!', results });
        });
    });
}

function actualizarProducto(id_producto, nombre_producto, genero_producto, cantidad_ml) {
    const TABLA = "productos";
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE ${TABLA} SET nombre_producto =?, genero_producto =?, cantidad_ml =? WHERE id_producto =?`, [nombre_producto, genero_producto, cantidad_ml, id_producto], (error, results) => {
            if (error) {
                if (error.code === 200) {
                    return reject(new Error("200"));
                } else if (error.code === 500) {
                    return reject(new Error("500"));
                } else {
                    return reject(error);
                }
            }
            resolve(results);
        });
    });
}

// Función controller para eliminar Productos:
async function eliminarProducto(id_producto) {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM ${TABLA} WHERE id_producto =?`, [id_producto], (error, results) => {
            if (error) {
                if (error.code === 200) {
                    return reject(new Error("200"));
                } else if (error.code === 500) {
                    return reject(new Error("500"));
                } else {
                    return reject(error);
                }
            }
            resolve(results.affectedRows);
        });
    });
}

/*eliminarProducto(10)
    .then((result) => {
        console.log(`Registro eliminado con éxito. Filas afectadas: ${result}`);
    })
    .catch((error) => {
        console.error('Error al eliminar el registro:', error);
    });*/

module.exports = { insertarProducto, obtenerProductos, actualizarProducto, eliminarProducto };