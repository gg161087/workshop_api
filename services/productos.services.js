import productosModels from '../models/productos.models.js';

const obtenerProductos = async (filtros) => {    
    const productos = await productosModels.obtenerProductos(filtros)
    return productos
}

const obtenerProductoPorId = () => { //  "/productos/:id"
    
}

const editarProducto = () => {
   
}

const actualizarProducto = () => {
    
}

const borrarProducto = () => {
    
}

const agregarProducto = () => {
    
}

export default {
    obtenerProductos,
    obtenerProductoPorId,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
}