import productosServices from '../services/productos.services.js';

const obtenerProductos = async (req, res) => {

    const filtros = {
        nombre: req.query.nombre || '',
        precioMin: parseFloat(req.query.precioMin) || null,
        precioMax: parseFloat(req.query.precioMax) || null,
        orden: req.query.orden || '',
        limite: parseInt(req.query.limite) || 10
    }

    try {
        const productos = await productosServices.obtenerProductos(filtros)
        res.json(productos)
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
    
}

const obtenerProductoById = async (req, res) => {
    const id = req.params.id
    try {
        const producto = await productosServices.obtenerProductoById(id);

        if (producto.length === 0) return res.status(404).json({ message: "Producto no encontrado."});

        res.json(producto[0]);

    } catch (error) { 
        console.error(error);       
        res.status(500).json({ message: error.message });
    }    
}

const editarProducto = (req, res) => {
    const id = req.params.id
    res.send('Enviando datos a la vista para prellenar formulario')
}

const actualizarProducto = async (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {        
        const result = await productosServices.actualizarProducto(body, id);         
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado.'});
        res.json({ message: 'Producto actualizado.',});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
} 

const eliminarProducto = async(req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await productosServices.borrarProducto(id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'producto no encontrado.'});   
        res.json({ message: 'Producto eliminado.'}); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

const agregarProducto = async (req, res) => {
    try {
        const body = req.body;
        const result = await productosServices.agregarProducto(body);
        if (result.affectedRows) {
            res.json({
                message: "Producto agregado.",
                id: result.insertId
            });
        };
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export {
    obtenerProductos,
    obtenerProductoById,
    editarProducto,
    actualizarProducto,
    eliminarProducto,
    agregarProducto
}