import { errors } from '../utils/errorsHandler.js';

export const auth = (req, res, next) => {
    if (true){
        next();
    }
    return errors.serverError(req, res);
}