import express from "express";
import connection from "./connection.js";
import Bookmark from "./models/Bookmark.js";

const app = express()

app.get("/", (req,res) => {
    Bookmark.find({})
    .then(bookmarks => res.json(bookmarks))
})

app.listen(3000, () => console.log("we're in"))
