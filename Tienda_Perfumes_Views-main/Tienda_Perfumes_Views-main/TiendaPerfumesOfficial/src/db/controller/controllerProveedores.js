// ControllerProveedores.js
const mysql = require('mysql2');
const { resolve } = require('path');
const conn = require('../conexion');
const { rejects } = require('assert');

// Definir la tabla a utilizar:
const TABLA = "proveedores";

// Función controller para Insertar Proveedores:
function insertarProveedor(rut_proveedor, id_producto_asociado, nombre_proveedor, region_proveedor, comuma_proveedor, numero_local, fono_proveedor) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} VALUES (null, '${rut_proveedor}', '${id_producto_asociado}', '${nombre_proveedor}', '${region_proveedor}', '${comuma_proveedor}', '${numero_local}', '${fono_proveedor}')`;
        console.log(query);
        conn.query(query,(error, results) => {
            if (error) {
                console.error('Error al insertar el proveedor!!', error);
                return reject(error);
            }
            resolve({ message: 'Proveedor creado exitosamente!!', results });
        });
    });
}

// Función controller para obtener Proveedores:
function obtenerProveedor(id_proveedor, rut_proveedor, id_producto_asociado, nombre_proveedor, region_proveedor, comuma_proveedor, numero_local, fono_proveedor) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id_proveedor =?`;
        console.log(query);
        conn.query(query, [id_proveedor, rut_proveedor, id_producto_asociado, nombre_proveedor, region_proveedor, comuma_proveedor, numero_local, fono_proveedor], (error, results) => {
            if (error) {
                console.error('Error al obtener el proveedor!!', error);
                return reject(error);
            }
            // Si la consulta es exitosa, envía una respuesta adecuada
            resolve({ message: 'Proveedor obtenido exitosamente!!', results });
        });
    });
}

// Función controller para actualizar Proveedores:
function actualizarProveedor(id_proveedor, rut_proveedor, id_producto_asociado, nombre_proveedor, region_proveedor, comuna_proveedor, numero_local, fono_proveedor) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET rut_proveedor =?, id_producto_asociado =?, nombre_proveedor =?, region_proveedor =?, comuna_proveedor =?, numero_local =?, fono_proveedor =? WHERE id_proveedor ='${id_proveedor}'`;
        console.log(query);
        conn.query(query, [rut_proveedor, id_producto_asociado, nombre_proveedor, region_proveedor, comuna_proveedor, numero_local, fono_proveedor ], (error, results) => {
            if (error) {
                console.error('Error al actualizar el proveedor!!', error);
                return reject(error);
            }
            // Si la actualización es exitosa, envía una respuesta adecuada
            resolve({ message: 'Proveedor actualizado exitosamente!!', results });
        });
    });
}

// Función controller para eliminar Proveedores:
function eliminarProveedor(id_proveedor) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id_proveedor ='${id_proveedor}'`;
        console.log(query);
        conn.query(query,[id_proveedor],(error, results) => {
            if (error) {
                console.error('Error al eliminar el proveedor!!', error);
                return reject(error);
            }
            // Si la eliminación es exitosa, envía una respuesta adecuada
            resolve({ message: 'Proveedor eliminado exitosamente!!', results });
        });
    });
}

module.exports = { insertarProveedor, obtenerProveedor, actualizarProveedor, eliminarProveedor };