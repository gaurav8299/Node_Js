// const json1 = {
//     name : "Ritvik",
//     age : 20,
//     city : "JAMMU"

// };
// console.log(JSON.stringify(json1,["name", "age"], 4));
// const json2 = '{"name":"Ritvik","age":20,"city":"Jammu"}';
// console.log(JSON.parse(json2));

// File Reading
//Synchronous
//Asynchronous

// const { error } = require('console')
// var fs = require('fs')
// var a = fs.readFileSync('async2.json')
// console.log(a)
// console.log(JSON.parse(a))

// var a  = fs.readFileSync('asyn1.json');
// b = JSON.parse(a);
// console.log('Synchronous read (raw data):', a);
// console.log('Synchronous read (parsed data):', b);
// console.log('This message is displayed after the synchronous read');


// // Asynchronous read

// fs.readFile('asyn1.json','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log('Asynchronous read (raw data):', data);
//     b = JSON.parse(data);
//     console.log('Asynchronous read (parsed data):',b);
// });
// console.log('This message is displayed before the asynchronous read')

// var obj = {"name":"Ritvik"}
// var obj1 = JSON.stringify(obj)
// fs.writeFile('asyn1.json', obj1,(err)=>{
//     if(err) throw error
//     console.log("file written successfully")
// })
// console.log(a)
// console.log(JSON.parse(a))


//SYNCHRONOUS RENAME
// fs.renameSync('asyn1.json','async2.json')


//ASYNCHRONOUS RENAME


// fs.rename('async2.json','async.json',(err)=>{
//     if(err) throw err
// })

var http = require('http')
var url = require('url')

http.createServer(function(req,res){
    if(req.url=="/"){
        res.end("Welcome to operations on file system")
    }
    else if(req.url=="/asyncfr"){
        fs.readFile('asyn.json')
    }
})