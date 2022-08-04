import {query} from "../index.js";

import { emergency_contacts } from "../libs/data.js";

async function populateTable() {
    for(let i = 0; i < emergency_contacts.length; i++){
        const result = await query(
            `INSERT INTO emergency_contacts(country, fire, police, ambulance, embassy) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [emergency_contacts[i].country, emergency_contacts[i].fire, emergency_contacts[i].police, emergency_contacts[i].ambulance, emergency_contacts[i].embassy]
        );
        console.log(`${emergency_contacts[i].country} added to DB`)
    }
}

populateTable();