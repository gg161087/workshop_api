import { Router } from 'express';
import { obtenerProductos, obtenerProductoPorId, actualizarProducto, editarProducto, agregarProducto, borrarProducto } from '../controllers/productos.controller.js';

const router = Router()

// ver todos los productos "/productos"
router.get("/", obtenerProductos)

// Obtener un producto por su ID (ej vista de producto detallado)
router.get("/:id", obtenerProductoPorId)

// Editar un producto (ej formulario prellenado para editar producto)
router.get("/editar/:id", editarProducto)

// Editar un producto enviando por formulario
router.put("/:id", actualizarProducto)

// Borrar un producto
router.delete("/:id", borrarProducto)

// Agregar un producto
router.post("/", agregarProducto)

export default router 