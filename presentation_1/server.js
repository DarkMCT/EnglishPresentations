const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("./static"));

app.listen("8080", "0.0.0.0", ()=> {
    console.log("listening on 8080");
});

app.get("/images", (req, res) => {
    fs.readdir("static/images/", (err, files)=>{
        if (err) {
            res.sendStatus(400);
            return;
        }

        res.json(files);
    });
});

app.get("/image/:id", (req, res) => {

    const id = req.params.id;

    res.sendFile(id, { root: __dirname + "/static/images/" }, err => {
        if (err)
            console.log("error");
    });

});
