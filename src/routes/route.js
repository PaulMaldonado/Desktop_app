const express = require("express");
const router = express.Router();

// Importando conexión a la BD
const db = require("../database/db");

// Ruta inicial
router.get('/', (req, res) => {
    db.query("SELECT * FROM task", (error, results) => {
        if(error) throw error;

        res.render('index', {
            results: results
        });
    });
});

// Ruta get para crear nuevas tareas
router.get('/create', (req, res) => {
    res.render('index');
});

// Método post para crear tareas
router.post('/create', (req, res) => {
    const newTasks = {
        name: req.body.name,
        description: req.body.description
    };

    const sql = "INSERT INTO task SET ?";
    db.query(sql, newTasks, (error, results) => {
        if(error) {
            console.log(error);
        }

        res.redirect('/');
    });
});

// Ruta para eliminar tarea
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM task WHERE id = ${id}`;
    db.query(sql, (error, result) => {
        if(error) {
            console.log(error);
        }

        res.redirect('/');
    });
});

// Ruta get para redireccionar al formulario de editar
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM task WHERE id = ${id}`;
    db.query(sql, (error, result) => {
        if(error) {
            console.log(error);
        }

        res.render('edit', {
            result: result[0]
        });
    });
});

// Ruta post para editar los datos de las tareas
router.post('/edit/:id', (req, res) => {
    const id = req.params.id;

    const editTasks = {
        name: req.body.name,
        description: req.body.description
    };

    const sql = `UPDATE task SET ? WHERE id = ${id}`;

    db.query(sql, editTasks, (error, results) => {
        if(error) {
            console.log(error);
        }

        res.redirect('/');
    });

});


module.exports = router;