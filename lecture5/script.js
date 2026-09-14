// topics

//forms handling and working with the forms
// handle backend of from and making sure the data  cominf form any frontent lib framework templtating engines we still hanlde it at the backend


// sesssion cookiee
// hum kuch bhi data frontend par browser par rakh skte hain  jab bhi request backend hai ang jab bhi app kuchh bhi request backend par kargo wo fe par request save data automatic backend per chala  jayega const app = express()
//milddleave

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

//