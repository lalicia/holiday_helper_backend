import { query, pool } from "../db/index.js";

export async function getAllItems(){
    const res = await pool.query(`SELECT * FROM emergency_contacts;`)
    return res.rows;
}

export async function getAllItemsASC(){
    const res = await pool.query(`SELECT * FROM emergency_contacts ORDER BY country ASC;`)
    return res.rows
}

export async function getEmergencyContactById(id){
    const res = await pool.query(`SELECT * FROM emergency_contacts WHERE id = ($1);`, [id])
    return res.rows;
}

export async function getEmergencyContactByCountry(country){
    const res = await pool.query(`SELECT * FROM emergency_contacts WHERE country = ($1);`, [country])
    return res.rows;
}

export async function updateEmergencyContact(id, emergencyContact) {
    const res = await query(
    `UPDATE emergency_contacts 
    SET country =($1), 
    fire=($2),
    police=($3),
    ambulance=($4),
    embassy=($5)
    WHERE id=(${id}) RETURNING*;`,
    [emergencyContact.country , emergencyContact.fire, emergencyContact.police, emergencyContact.ambulance, emergencyContact.embassy]
    );
    console.log(`emergency_contacts updated: ${JSON.stringify(res.rows)}`)
    return res.rows;
  }

  export async function addEmergencyContact(newEmergencyContact) {
    console.log(newEmergencyContact)
    const res = await pool.query(`INSERT INTO emergency_contacts (country, fire, police, ambulance, embassy) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [newEmergencyContact.country, newEmergencyContact.fire, newEmergencyContact.police, newEmergencyContact.ambulance, newEmergencyContact.embassy]);
    console.log(`new EmergencyContact added, ${JSON.stringify(res.rows)}`);
    return res.rows;
  }

  export async function deleteEmergencyContact(id) {
    const res = await query(`DELETE FROM emergency_contacts 
    WHERE id=(${id}) RETURNING*;`);
    console.log(`EmergencyContact deleted: ${JSON.stringify(res.rows)}`)
    return res.rows;
  }
