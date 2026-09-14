const express = require("express");

const app = express();  
const path = require("path");
const userModel = require("./models/user.js");
// ejs
app.set("view engine","ejs")


// mildware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// public stratic files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.render("read", { users :users});

});
app.get("/delete/:id", async (req, res) => {
    let users =await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
});

app.post("/create", async (req, res) => {
    let{name, email, image} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        image


    });
    res.send(createdUser);
});
app.get("/edit/:userid", async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit", {user});
}   );

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

