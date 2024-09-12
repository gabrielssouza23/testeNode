import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres{

    #items = new Map();

    async list (){
        const items = await sql`SELECT * FROM items`

        return items
    }

    async create(item){
        const itemId = randomUUID();

        const { title, description, duration } = item

        await sql`INSERT INTO items (id, title, description, duration) VALUES (${itemId}, ${title}, ${description}, ${duration})`
       
    }

    update(id, item){
       
    }

    delete(id){
              
    }
}