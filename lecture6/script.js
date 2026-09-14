//topic

// seeting up parser for form  = line 21,22 app 
// seeting ip ejs for ejs pages = install ejs from npm   = setup ejs as a mildeare for view engine  and copy for html
// settingg up public stratic files



// intilization a project with npm
// express install


// dyanmic routing = 1 dyanamic routing    2 how to get data coming from frontend at backend route
// hum log kia bar routesdhete hai umein sirf ek hi hissa  change hota hai 
//sabse phelee brower par jiyo 
//url likho apna jo aapko chaiye and enter press karo
//ab us url route ko create karliya
// res bhejiye kuchh bhi
// ab usi url koaager dyanmic banana hai to realise karo konsa part dyanmic hai us part ke ayega route ma : laga da


const path = require("path");
const express =require('express');
const app =express();
// mildware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// public stratic files
app.use(express.static(path.join(__dirname, "public")));
// ejs
app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("index", { files: files });
  
});

// dyanimic route
app.get("/profile/:username",function(req,res){
    
    res.send(req.params.username);
})


app.listen(3000,function(){
    console.log("its running");
})