import { createPool } from "mysql2";
import 'dotenv/config'
let connections = 100

let connection = createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PWD_DB,
    database: process.env.DBNAME,
    multipleStatements: true,
    connectionLimit: 100,
})

connection.on('error', (err)=>{
    if (err ){
        console.error('Error connecting to DB:', err.stack);
        return process.exit(1);
    }
});

connection.on('connection', (pool)=>{
    connections--;
    console.log(`Connected to DB ${pool.config.database}`);
    console.log(`connections left to connect to DB ${ connections }`);
})

export {
    connection
}