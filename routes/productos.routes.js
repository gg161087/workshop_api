import { Router } from 'express';
import { obtenerProductos, obtenerProductoById, actualizarProducto, editarProducto, agregarProducto, eliminarProducto } from '../controllers/productos.controller.js';

const router = Router();

router.get('/', obtenerProductos);

router.get('/:id', obtenerProductoById);

router.get('/editar/:id', editarProducto);

router.post('/', agregarProducto);

router.put('/:id', actualizarProducto);

router.delete('/:id', eliminarProducto);

export default router; 