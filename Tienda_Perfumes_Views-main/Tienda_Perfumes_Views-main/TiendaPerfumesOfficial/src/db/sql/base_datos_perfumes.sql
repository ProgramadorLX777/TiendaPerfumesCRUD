-- Crear base de datos:
create database if not exists perfumes;

-- Usar base de datos perfumes:
use perfumes;

-- Creación de tabla Productos:
create table productos(
    id_producto int primary key auto_increment,
    nombre_producto varchar(30),
    genero_producto varchar(20),
    cantidad_ml int not null,
    precio_producto decimal(10,3)
);

-- Creación de tabla Proveedores:
create table proveedores(
    id_proveedor int primary key auto_increment,
    rut_proveedor varchar(15),
    id_producto_asociado int,
    nombre_proveedor varchar(30),
    region_proveedor varchar(60),
    comuna_proveedor varchar(40),
    numero_local int,
    fono_proveedor varchar(15),
    foreign key (id_producto_asociado) references productos(id_producto)
);

-- Creación de tabla Clientes:
create table clientes(
    id_cliente int PRIMARY KEY auto_increment,
    rut_cliente varchar(15),
    nombre_cliente varchar(20),
    apellido_cliente varchar(40),
    region_cliente varchar(60),
    comuna_cliente varchar(40),
    villa_pasaje varchar(40),
    numero_casa_depto int,
    fono_cliente int
);

-- Creación de tabla Pedidos:
create table pedidos(
    id_pedido int primary key auto_increment,
    id_producto_comprar int,
    cantidad_comprar int,
    tipo_de_pago varchar(30),
    fecha_pedido date,
    metodo_envio varchar(30),
    estado_pedido varchar(20),
    ciudad_entrega varchar(30),
    foreign key (id_producto_comprar) references productos(id_producto)
);

-- Datos para ingresar a la base de datos:
INSERT INTO productos VALUES(null, "Farenheight", "Hombre", 100, 17000);
INSERT INTO productos VALUES(null, "Acqua di Gio", "Hombre", 50, 11000);

INSERT INTO proveedores VALUES(null, "14987451-4", 1, "PerfumeXS", "Coquimbo", "Coquimbo", 4843, 915948732);
INSERT INTO proveedores VALUES(null, "10848641-2", 2, "Fraganticas", "Libertador Bernando", "Coinco", 7844, 964826279);

INSERT INTO clientes VALUES(null, "21774978-1", "Enrique", "Carrasco", "Metropolitana", "Santiago", "Los alamos", 3678, 94642950);
INSERT INTO clientes VALUES(null, "14865127-4", "Gerardo", "Diaz", "Atacama", "Atacama", "Los tres trigales", 7985, 958129412);

INSERT INTO pedidos VALUES(null, 1, 5, "debito", "2024-01-31", "Starken", "En curso", "Santiago");
INSERT INTO pedidos VALUES(null, 2, 3, "efectivo", "2024-03-25", "Correos Chile", "En curso", "Valdivia");

-- Obtener datos de las tablas:
SELECT * FROM productos;
SELECT * FROM proveedores;
SELECT * FROM clientes;
SELECT * FROM pedidos;



