-- JSON para la tabla Productos:
-- Agregar Producto mediante el método POST:
{
    "nombre_producto": "Farenheight",
    "cantidad_ml": 100,
    "precio_producto": 17000
}

-- Obtener producto mediante el ID 2 por método GET:
http://localhost:5000/selectProductos/id_producto=2

-- Actualizar producto mediante el ID 2 por método PUT:
{
    "id_producto": "2",
    "nombre_producto": "Polo Ultra Blue",
    "cantidad_ml": 100,
    "precio_producto": 17000
}

-- Eliminar producto mediante el ID 2 por método DELETE:
{
    "id_producto": "2"
}

-- JSON para la tabla Proveedores:
-- Agregar Proveedor mediante el método POST:
{
    "rut_proveedor": "19486712-4",
    "id_producto_asociado": 25, 
    "nombre_proveedor": "Perfumes Chile Ltda",
    "region_proveedor": "Libertador Bernando",
    "comuna_proveedor": "Rancagua",
    "numero_local": 1532,
    "fono_proveedor": 972158649
}

-- Obtener proveedor mediante el ID 1 por método GET:
http://localhost:5000/selectProveedores/id_proveedor=1

-- Actualizar proveedor mediante el ID 1 por método PUT:
{
    "id_proveedor": 1,
    "rut_proveedor": "10548931-4",
    "id_producto_asociado": 25, 
    "nombre_proveedor": "Fragancias Calidad",
    "region_proveedor": "Valparaiso",
    "comuna_proveedor": "Valparaiso",
    "numero_local": 4987,
    "fono_proveedor": 974821684
}

-- Eliminar proveedor mediante el ID 1 por método DELETE:
{
    "id_proveedor": 1
}

-- JSON para la tabla Clientes:
-- Agregar Cliente mediante el método POST:
{
    "rut_cliente": "21774978-1",
    "nombre_cliente": "Enrique",
    "apellido_cliente": "Carrasco",
    "region_cliente": "Metropolitana",
    "comuna_cliente": "Santiago",
    "villa_pasaje": "Los alamos",
    "numero_casa_depto": "3678",
    "fono_cliente": 946642950
}

-- Obtener cliente mediante el ID 2 por método GET:
http://localhost:5000/selectClientes/id_cliente=2

-- Actualizar cliente mediante el ID 1 por método PUT:
{
    "id_cliente": 4,
    "rut_cliente": "15496753-2",
    "nombre_cliente": "Fabian",
    "apellido_cliente": "Sanchez",
    "region_cliente": "Maule",
    "comuna_cliente": "Chanco",
    "villa_pasaje": "Flor de las nieves",
    "numero_casa_depto": 1648,
    "fono_cliente": 9724983167
}

-- Eliminar cliente mediante el ID 1 por método DELETE:
{
    "id_cliente": 1
}

-- JSON para la tabla Pedidos:
-- Agregar Pedido mediante el método POST con el ID 2:
{
    "id_producto_comprar": 2,
    "cantidad_comprar": 2,
    "tipo_de_pago": "debito",
    "fecha_pedido": "2024-01-31"
}

-- Obtener pedido mediante el ID 2 por método GET:
http://localhost:5000/selectPedidos/id_pedido=2

-- Actualizar pedido mediante el ID 2 por método PUT:
{
    "id_pedido": 1,
    "id_producto_comprar": 2,
    "cantidad_comprar": 10,
    "tipo_de_pago": "credito",
    "fecha_pedido": "2024-02-18"
}

-- Eliminar pedido mediante el ID 2 por método DELETE:
{
    "id_pedido": 2
}