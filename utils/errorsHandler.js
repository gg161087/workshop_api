import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const errors = {
    notFound: (req, res, next) => {
        res.status(404).sendFile(resolve(__dirname, '../public/pages/404.html'));
    },
    serverError: (req, res, next) => {
        res.status(500).send('El servidor no responde');
    }
}