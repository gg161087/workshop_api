import { Router} from 'express';

import productosRouter from './productos.routes.js';

export const router = Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'hola mundo'});
});
router.get('/productos', (req, res) => {
    res.render('productos', {titulo: 'Productos'});
});

router.use('/api/productos', productosRouter);

router.use((req, res) => {
    res.status(404).render('404', {
        titulo: 'Error 404',
        descripcion: 'Página no encontrada'
    });
});