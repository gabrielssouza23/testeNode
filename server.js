import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres;.js";

const server = fastify();

const database = new DatabasePostgres();

server.post("/items", async (request, reply) =>{

    const { title, description, duration} = request.body;

    await database.create({
        title,
        description,
        duration   
    })

    return reply.status(201).send()
})

server.get("/items", async () => {
    const items =  await database.list()

    return items;
});

server.listen({
    port: process.env.PORT ?? 3333,
})