// topics
// mongdob install
// mongod connection
//schema
// model
//  crud

//  monog sa jo bhi code hum likhte hai vo async hota hai isliye humne async await ka use kiya hai

const express = require("express");

const app = express();

const userModel = require("./usermodel");


// HOME ROUTE
app.get("/", (req, res) => {
    res.send("hello world");
});


// CREATE
app.get("/create", async (req, res) => {

    let createdUser = await userModel.create({
        username: "yash",
        name: "Yash",
        email: "yash@example.com"
    });

    res.send(createdUser);
});


// UPDATE
app.get("/update", async (req, res) => {

    let updatedUser = await userModel.findOneAndUpdate(
        { username: "yash" },
        { name: "harsh" },
        { new: true }
        
    );

    res.send(updatedUser);
});
// read
app.get("/read", async (req, res) => {
    let user = await userModel.findOne({ username: "yash" });
    res.send(user);

});

// delete
app.get("/delete", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: "yash" });
    res.send(deletedUser);
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

