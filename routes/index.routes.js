import { Router} from 'express';

import { auth } from '../middleware/authMiddleware.js';

import adminRouter from './productos.routes.js';
import productosRouter from './productos.routes.js';

export const router = Router();

router.use('/admin', auth , adminRouter);
router.use('/productos', productosRouter);