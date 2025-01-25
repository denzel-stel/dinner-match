import {drizzle} from "drizzle-orm/node-postgres";

console.log('Connecting to the database...')
const database = drizzle(process.env.DATABASE_URL!);
console.log('Connected to the database!')
export default database;