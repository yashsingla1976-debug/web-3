// topics
// express \.js framework 
// introduction to express.js
// EXPRESS JS EK NPM PACKAGE HAI
// FRAMEWORK =
// MANAGES EVERYTHING FROM RECEVING THE REQUST AND GIVING THE RESPONSE


// setting up a basic express applicaion   = 
// routing= / ka bad hota usa route kahta hai jaise /facebok
//middleawere  = route sa phle chalta hai jab bhi server accept karta hai waha se pouchna tak agar us request ko bech me rokte ho and kuck perform krta ho to ye element mildware khelata hai

// req and res holding

//error handling = next laghna padgega aur jo next codee hoga vo band ho jayega
 

const express = require('express')
const app = express()
//milddleave
app.use(function(req,res,next){
    console.log("mildleace chelega");
    next();
});
app.use(function(req,res,next){
    console.log("mildleace chelega ek aur bar");
    next();
}); 

app.get('/',function(req,res){
    res.send('hello  yash');
});

app.get('/about',function(req,res){
    res.send("about page hai ya");
});
app.get('/profile',function(req,res,next){
    return next(new Error("something weent wrong"))
  
});
// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);

