const sequelize = require('../db/database'); // Importar la conexión a la base de datos

// Importar el paquete Sequelize
const Sequelize = require('sequelize');

// Crear una instancia de Sequelize
const sequelize = new Sequelize('perfumes', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Definir un modelo de Producto
const Producto = sequelize.define('Producto', {
  nombreProducto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  generoProducto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cantidadML: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Sincronizar el modelo con la base de datos
Producto.sync();

// Exportar el modelo
module.exports = { Producto };