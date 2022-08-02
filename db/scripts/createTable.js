import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS emergency_contacts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    country TEXT,
    fire INT,
    police INT,
    ambulance INT,
    embassy TEXT
);`;

async function createTable () {
    const result = await query(sqlString);
    console.log("Table created")
};

createTable();

