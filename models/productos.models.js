import { pool } from '../config/db.config.js';

const obtenerProductos = async (filtros) => {
    let sql = 'SELECT * FROM productos';
    
    let whereClause = '';
    let values = [];

    if (filtros.nombre) {
        whereClause += 'nombre LIKE ? AND ';
        values.push(`%${filtros.nombre}%`);
    }

    if (filtros.precioMin && filtros.precioMax) {
        whereClause += 'precio BETWEEN ? AND ? AND ';
        values.push(filtros.precioMin, filtros.precioMax);
    } else if (filtros.precioMin) {
        whereClause += 'precio > ? AND ';
        values.push(filtros.precioMin);
    } else if (filtros.precioMax) {
        whereClause += 'precio < ? AND ';
        values.push(filtros.precioMax);
    }

    if (whereClause !== '') {
        console.log('whereClause ANTES', whereClause);
        whereClause = 'WHERE ' + whereClause.slice(0, -5);
        sql += ' ' + whereClause;        
    }

    if (filtros.orden) {
        const orden = filtros.orden === 'desc' ? 'DESC' : 'ASC';
        sql += ` ORDER BY precio ${orden}`;
    }

    sql += ` LIMIT ${filtros.limite}`;

    try {
        const [result] = await pool.query(sql, values);      
        return result; 
    } catch (err) {
        throw new Error('Error al obtener los productos desde la base de datos.');
    }

}

const obtenerProductoById = async (id) => {
    let sql = 'SELECT * FROM productos WHERE id = ?';

    try {
        const [result] = await pool.query(sql, id);               
        return result; 
    } catch (err) {
        throw new Error('Error al obtener el producto desde la base de datos.');
    }
}

const agregarProducto = async (nuevoProducto) => {
    let sql = 'INSERT INTO tasks(nombre, precio, stock, descripcion, imagen) VALUES (?, ?, ?, ?, ?)'
    try {
        const { nombre, precio, stock, descripcion, imagen} = nuevoProducto;
        const [result] = await pool.query(sql, [
            nombre,
            precio,
            stock,
            descripcion,
            imagen
        ]);
        return result       
    } catch (error) {
        throw new Error('Error al crear producto desde la base de datos.');
    };
}

const actualizarProducto = async (producto, id) => {    
    let sql = 'UPDATE productos SET ? WHERE id = ?'
    try {         
        const [result] = await pool.query(sql, [producto, id]);                          
        return result;   
    } catch (error) {
        throw new Error('Error al actualizar el producto desde la base de datos.');
    }
}

const eliminarProducto = async (id) => {
    let sql = 'DELETE FROM productos WHERE id = ?'
    try {        
        const [result] = await pool.query(sql, id);    
        return result;       
    } catch (error) {
        throw new Error('Error al eliminar el producto desde la base de datos.');
    }
}

export default {
    obtenerProductos,
    obtenerProductoById,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
}