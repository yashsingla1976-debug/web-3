//lecture 2

// js se backend nai ban sakta
// kyui js ke pass wo functionlilites nahi hai jisna backend banta hai
// ryan dhal isne socha js se backemd bna chaiye
// google chrome ka v8 engine ka code open source hai and ryan dhal us code ma cheedkhanni kar  raha hai
// kyuki chrome ka v8 eengine bana hai c++ mein
// fir usna socha ki humein to js mein code karns hai
//hum js ka code likhega jo ki wrappper layer of js receive kargi and wo code v8 engine ka c++ module ke sath ek server  crete karga
//nodejs is a runtime enviroment


//topics


// Node.js basic
// introductionn to node.js

// node & npm working with node and npm
//npm init

// installing node.js and npm
// working with module

//file system operation
// understanding HTTP module

// npm init -y -> package.jyson banta hai


const fs =  require('fs');
// write file
//  append fiile 
// copy file
// renname
//  unlink

// write file


fs.writeFile("hey.txt", "hey hello  kaise ho", function (err){
    if(err)console.error(err);
    else console.log("done");
// hey txt ka  file ka name hai
})



// append file

fs.appendFile("hey.txt", "ma to yash hu", function (err){
    if(err)console.error(err);
    else console.log("done");

})


// //  rename file


fs.rename("hey.txt", "hello txt", function (err){
    if(err)console.error(err);
    else console.log("done");

})

// copy file
fs.copyFile("hello.txt", "./copy/chacha.txt", function (err){
    if(err)console.error(err);
    else console.log("done");
})
// ek folder ma new file add kad dega





// unlink matlab detele


fs.unlink("hello txt", function (err){
    if(err)console.error(err);
    else console.log("done");

})

//
