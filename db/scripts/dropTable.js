import {query} from "../index.js";

const dropIt = `DROP TABLE IF EXISTS emergency_contacts;`;

await query(dropIt);

