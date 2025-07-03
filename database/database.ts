import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";

console.log('Connecting to the database...')
const database: NodePgDatabase = drizzle("postgres://postgres:123456@172.17.0.1:5432/dinner_match");
console.log('Connected to the database!')

export default database;