import productosModels from '../models/productos.models.js';

const obtenerProductos = async (filtros) => {    
    const productos = await productosModels.obtenerProductos(filtros);
    return productos;
}

const obtenerProductoById = async (id) => {
    const producto = await productosModels.obtenerProductoById(id);
    return producto;
}

const agregarProducto = async (datosProducto) => {
    const producto = await productosModels.agregarProducto(datosProducto);
    return producto;
}

const editarProducto = () => {
   
}

const actualizarProducto = async (body, id) => {    
    const producto = await productosModels.actualizarProducto(body, id);       
    return producto;
}

const borrarProducto = async (id) => {
    const producto = await productosModels.obtenerProductoById(id);
    return producto;
}

export default {
    obtenerProductos,
    obtenerProductoById,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
}