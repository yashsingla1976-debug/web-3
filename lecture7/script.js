const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// EJS setup
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", function (req, res) {


fs.readdir("./files", function (err, files) {

    if (err) {
        return res.status(500).send("Unable to read files");
    }

    res.render("index", { files: files });

});


});

// Create route
app.post("/create", function (req, res) {


const title = req.body.title;
const details = req.body.details;

const filename = title.split(" ").join("") + ".txt";

fs.writeFile(
    `./files/${filename}`,
    details,
    function (err) {

        if (err) {
            return res.status(500).send("Unable to create file");
        }

        res.redirect("/");
    }
);

});

// Read individual file  // yaha approch hai jo hamna server per file banyi hai read more per click kargnga to ya approch  laghyi shoe.ejs
app.get("/file/:filename", function (req, res) {


fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {

        if (err) {
            return res.status(404).send("File not found");
        }

        res.render("show", {
            filename: req.params.filename,
            filedata: filedata
        });

    }
);


});


// edit file
app.get("/edit/:filename", function (req, res) {


fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {

        if (err) {
            return res.status(500).send("Unable to read file");
        }

        res.render("edit", {
            filename: req.params.filename,
            filedata: filedata
        });

    }
);


});

// UPDATE FILE - POST
app.post("/edit/", function (req, res) {

const filename = req.params.filename;
const filedata = req.body.filedata;

fs.writeFile(
    `./files/${filename}`,
    filedata,
    function (err) {

        if (err) {
            return res.status(500).send("Unable to update file");
        }

        res.redirect(`/file/${filename}`);
    }
);

});



// Start server
app.listen(3000, function () {
console.log("Server running on http://localhost:3000");
});
