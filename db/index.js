import pg from "pg";
import 'dotenv/config';

const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    
    
    //connectionString: process.env.PGCONNECTIONSTRING,
    ssl: {rejectUnauthorized: false},
});

export function query(text, params, callback) {
    return pool.query(text, params, callback);
}

const result = await pool.query(`SELECT NOW()`);
console.log(result.rows);