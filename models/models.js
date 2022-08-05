import { query, pool } from "../db/index.js";

export async function getAllItems(){
    const res = await pool.query(`SELECT * FROM emergency_contacts;`)
    return res.rows;
}

export async function getAllItemsASC(){
    const res = await pool.query(`SELECT * FROM emergency_contacts ORDER BY country ASC;`)
    return res.rows
}