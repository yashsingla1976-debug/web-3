
// fundamental of javascript
// array and object
// function return
//  asyn js coding

var arr = [1, 2, 3, 4, 5, "hello"];
// foreach map filter fing indexof  array ka liye ana chaicya

// arr.forEach(function (value, index) {
//     console.log(value + "hello");

// })



//map
//  var newArr = arr.map(function (value){
//     return value*3;
//     // maan ka ek blank array bnna aur jitna array ka length hoga utna blank array me push krdo
// })
// console.log(newArr);



//filter

// var ans = arr.filter(function (value){
//     if(value>3){return true}
//     else{return false}

// })
// console.log(ans);



// object
// var obj =
// {
//     name: "yash"

// }


// console.log(obj);


// function return

// function abcd(){
    // return "hello";
// }
// var result = abcd();


// asyn js coding

var response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
var data = await response.json();
console.log(data);

// line by line code chal rha hoga synchronous manner
// ja bhi code me await hoga waha ruk jaega jab tak data nahi aa jata






