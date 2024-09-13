import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sen@iDev77!.",
    database: "db_books"
})

export default db;