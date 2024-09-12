import { sql } from "./db.js";

// sql `DROP TABLE if exists items`.then(() =>{
//     console.log("tabela deletada")
// })

sql `
CREATE TABLE items (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER
);
`.then(() =>{
    console.log("tabela criada")
})