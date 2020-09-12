const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'test'
});

// Comprobando la conexión
db.connect((error) => {
    if(error) throw error;

    console.log("Database connected");
});

module.exports = db;