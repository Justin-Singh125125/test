const app = require("express").Router();
const connection = require("../db/connection");

app.get("/api/notes", (req, res) => {
    connection.query("SELECT * FROM notes", (err, response) => {
        return res.json(response);
    });
})

app.post("/api/notes", (req, res) => {
    console.log(req.body);

    connection.query(
        "INSERT INTO notes SET ?", req.body,
        function (err, response) {
            if (err) throw err;
            return res.json(response)
        })
})

app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;

    connection.query(
        "DELETE FROM notes WHERE ?", { id },
        function (err, response) {
            if (err) throw err;
            return res.json(response)
        })
})



module.exports = app;