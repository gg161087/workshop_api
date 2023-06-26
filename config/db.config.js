import mysql from 'mysql2/promise';
import { DB_HOST, DATABASE, USER, PASSWORD } from './server.config.js';

export const pool = mysql.createPool({
    host: DB_HOST,
    database: DATABASE,
    user: USER,
    password: PASSWORD
});