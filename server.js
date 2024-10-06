// function add(a, b){
//     return a + b;
// }

// var add = function(a, b){
//     return a + b;
// }

// var add = (a, b) => {return a + b};

// var add = (a, b) => a + b;

// var result = add(333, 8);
// console.log(result);

// (function(){
//     console.log('Ritvik is added')
// })();


// _________________CALLBACK__Function______________
/*
function callback(){  // callback function
    console.log('Ritvic is calling a callback function');
}

const add = function(a, b, callback){ //main function
    var result = a + b;
    console.log('result: '+result); // main function work completed
    callback();
}

add(8887895, 54, callback);
*/



// const add = function(a, b, ritvik){
//     var result = a + b;
//     console.log('result: '+result);
//     ritvik();
// }

// // add(2, 3, function(){
// //     console.log('add completed')
// // });


// add(6, 5, () => console.log('add completed'));

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi '+user.username + '!\n', ()=>{
//     console.log('file is created')
// });

// console.log(fs);


const notes = require('./notes.js');
var _ = require('lodash');


console.log('server file is available');
var age = notes.age;
var result = notes.addNumber(age+18, 10);
console.log(age);
console.log('Now result is: '+result);


var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString(true));