// ControllerClientes.js
const mysql = require('mysql2');
const conn = require('../conexion');

// Definir la tabla a utilizar:
const TABLA = "clientes";

// Función para insertar clientes:
function insertarClientes(rut_cliente, nombre_cliente, apellido_cliente, region_cliente, comuna_cliente, villa_pasaje, numero_casa_depto, fono_cliente) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} VALUES (null,'${rut_cliente}', '${nombre_cliente}', '${apellido_cliente}', '${region_cliente}', '${comuna_cliente}', '${villa_pasaje}', '${numero_casa_depto}', '${fono_cliente}')`;
        console.log(query);
        conn.query(query,(error, results) => {
            if (error) {
                console.error('Error al insertar cliente!!', error);
                return reject(error);
            }
            // Si la inserción es exitosa, envía una respuesta adecuada
            resolve({ message: 'Cliente creado exitosamente!!', results });
        });
    });
}

// Función controller para obtener Clientes:
function obtenerClientes(id_cliente, rut_cliente, nombre_cliente, apellido_cliente, region_cliente, comuna_cliente, villa_pasaje, numero_casa_depto, fono_cliente) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id_cliente =?`;
        console.log(query);
        conn.query(query, [id_cliente, rut_cliente, nombre_cliente, apellido_cliente, region_cliente, comuna_cliente, villa_pasaje, numero_casa_depto, fono_cliente],   (error, results) => {
            if (error) {
                console.error('Error al obtener el cliente:', error);
                return reject(error);
            }
            // Si la consulta es exitosa, envía una respuesta adecuada
            resolve({ message: 'Cliente obtenido exitosamente', results });
        });
    });
}

// Función controller para actualizar Clientes:
function actualizarCliente(id_cliente, rut_cliente, nombre_cliente, apellido_cliente, region_cliente, comuna_cliente, villa_pasaje, numero_casa_depto, fono_cliente) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET rut_cliente =?, nombre_cliente =?, apellido_cliente =?, region_cliente =?, comuna_cliente =?, villa_pasaje =?, numero_casa_depto =?, fono_cliente =? WHERE id_cliente ='${id_cliente}'`;
        console.log(query);
        conn.query(query, [rut_cliente, nombre_cliente, apellido_cliente, region_cliente, comuna_cliente, villa_pasaje, numero_casa_depto, fono_cliente], (error, results) => {
            if (error) {
                console.error('Error al actualizar el cliente:', error);
                return reject(error);
            }
            // Si la actualización es exitosa, envía una respuesta adecuada
            resolve({ message: 'Cliente actualizado exitosamente', results });
        });
    });
}

// Función controller para eliminar Clientes:
function eliminarCliente(id_cliente) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id_cliente ='${id_cliente}'`;
        console.log(query);
        conn.query(query,[id_cliente],(error, results) => {
            if (error) {
                console.error('Error al eliminar el cliente!!', error);
                return reject(error);
            }
            // Si la eliminación es exitosa, envía una respuesta adecuada
            resolve({ message: 'Cliente eliminado exitosamente!!', results });
        });
    });
}

module.exports = { insertarClientes, obtenerClientes, actualizarCliente, eliminarCliente };