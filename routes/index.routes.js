import { Router} from 'express';

import { auth } from '../middleware/authMiddleware.js';
import adminRouter from './productos.routes.js';
import productosRouter from './productos.routes.js';

export const router = Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'hola mundo'});
});

router.use('/admin', auth , adminRouter);
router.use('/api/productos', productosRouter);