import { randomUUID } from "node:crypto"

export class DatabaseMemory{

    #items = new Map();

    list(){
        return Array.from(this.#items.values());
    }

    create(item){
        const itemId = randomUUID();
        this.#items.set(itemId, item);
    }

    update(id, item){
        this.#items.set(id, item);
    }

    delete(id){
        this.#items.delete(id);        
    }
}