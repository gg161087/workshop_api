import express from 'express';

import { HOST, PORT } from './config/server.config.js';
import { router } from './routes/index.routes.js';
import { errors } from './utils/errorsHandler.js';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.set('port', PORT);
app.use('/api', router);

app.use(errors.notFound)

app.listen(PORT, () => {console.log(`Servidor corriendo http://${HOST}:${PORT}`)});