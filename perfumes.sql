-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-07-2024 a las 15:39:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `perfumes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `rut_cliente` varchar(15) DEFAULT NULL,
  `nombre_cliente` varchar(20) NOT NULL,
  `apellido_cliente` varchar(40) NOT NULL,
  `region_cliente` varchar(60) DEFAULT NULL,
  `comuna_cliente` varchar(40) DEFAULT NULL,
  `villa_pasaje` varchar(40) DEFAULT NULL,
  `numero_casa_depto` int(11) DEFAULT NULL,
  `fono_cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `rut_cliente`, `nombre_cliente`, `apellido_cliente`, `region_cliente`, `comuna_cliente`, `villa_pasaje`, `numero_casa_depto`, `fono_cliente`) VALUES
(1, '21774978-1', 'Enrique', 'Carrasco', 'Metropolitana', 'Santiago', 'Los alamos', 3678, 94642950),
(2, '14865127-4', 'Gerardo', 'Diaz', 'Atacama', 'Atacama', 'Los tres trigales', 7985, 958129412),
(3, '15524131-4', 'diego', 'perez', 'Región de La Araucanía', 'Viña del Mar', 'los alamos', 4353, 2147483647);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_producto_comprar` int(11) NOT NULL,
  `cantidad_comprar` int(11) NOT NULL,
  `tipo_de_pago` varchar(30) DEFAULT NULL,
  `fecha_pedido` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_producto_comprar`, `cantidad_comprar`, `tipo_de_pago`, `fecha_pedido`) VALUES
(1, 1, 5, 'debito', '2024-01-31'),
(2, 2, 3, 'efectivo', '2024-03-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(30) NOT NULL,
  `cantidad_ml` int(11) NOT NULL,
  `precio_producto` decimal(10,3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `cantidad_ml`, `precio_producto`) VALUES
(1, 'Farenheight', 100, 17000.000),
(2, 'Acqua di Gio', 50, 11000.000),
(3, 'Farenheight', 100, 17000.000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id_proveedor` int(11) NOT NULL,
  `rut_proveedor` varchar(15) NOT NULL,
  `id_producto_asociado` int(11) NOT NULL,
  `nombre_proveedor` varchar(30) NOT NULL,
  `region_proveedor` varchar(60) NOT NULL,
  `comuna_proveedor` varchar(40) NOT NULL,
  `numero_local` int(11) NOT NULL,
  `fono_proveedor` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id_proveedor`, `rut_proveedor`, `id_producto_asociado`, `nombre_proveedor`, `region_proveedor`, `comuna_proveedor`, `numero_local`, `fono_proveedor`) VALUES
(1, '14987451-4', 1, 'PerfumeXS', 'Coquimbo', 'Coquimbo', 4843, '915948732'),
(2, '10848641-2', 2, 'Fraganticas', 'Libertador Bernando', 'Coinco', 7844, '964826279');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id_producto_comprar` (`id_producto_comprar`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id_proveedor`),
  ADD KEY `id_producto_asociado` (`id_producto_asociado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_producto_comprar`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD CONSTRAINT `proveedores_ibfk_1` FOREIGN KEY (`id_producto_asociado`) REFERENCES `productos` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
