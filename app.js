const express = require("express");
const db = new (require("./DataBase"))();
const app = express();
const frontEndRoot = __dirname + "/frontApp/app/";

app.get("/authors", (req, res) => res.json(db.getAuthors()));
app.get("/genres", (req, res) => res.json(db.getGenres()));
app.get("/books/", (req, res) => res.json(db.getBooks()));
app.get("/books/:id", (req, res) => res.json(db.getBookById(req.params.id)));

app.get("*", (req, res) => {
    if (req.url == "/") {
        res.sendFile(frontEndRoot + "index.html");
    }

    res.sendFile(frontEndRoot + req.url);
});

app.listen(3000, () => console.log("listening port 3000"));
