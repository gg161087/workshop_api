import express from 'express';

import { HOST, PORT } from './config/server.config.js';
import { router } from './routes/index.routes.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('port', PORT);

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {console.log(`Servidor corriendo http://${HOST}:${PORT}`)});