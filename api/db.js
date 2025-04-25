import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Leonardo2904",
    database: "crud"
})