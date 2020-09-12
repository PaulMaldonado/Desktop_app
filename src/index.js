const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const router = require("./routes/route");

const app = express();
const PORT = 3000;

// Usando body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// usando rutas
app.use('/', router);
app.use('/create', router);
app.use('/edit', router);

// Accediendo a la carpeta vistas
app.set('views', path.join(__dirname, 'views'));
// Importando que sistema de plantillas usare
app.set('view engine', 'ejs');

// Accediendo a archivos staticos
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Port Run on port: http://localhost:${PORT}`);
});