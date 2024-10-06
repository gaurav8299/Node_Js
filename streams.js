// IMPORTANT FOR ETP 


// WRITE THE FILE USING THE WRITABLE STREAMS
// const fs = require('fs');
// const file = fs.createWriteStream('bigfile');

// for(let i = 0; i < 100000; i++){
//     file.write('My name is RItvik\n');
// }
// file.end();
// file.on('finish',function(){
//     console.log("Write Completed.");
// });

// file.on('error',function(err){
//     console.log(err)
// });



// READ THE FILE USING THE READABLE STREAMS

// var data1 = '';
// var reader = fs.createReadStream('bigfile');
// reader.setEncoding('UTF8');
// reader.on('data',function(chunk){
//     data1 = chunk;
// });

// reader.on('end',function(){
//     console.log(data1);
// });

// reader.on('error',function(err){
//     console.error(err);
// });


// PIPING 
// It is used to copy the file data into the another file

// const fs = require('fs');
// var read = fs.createReadStream("bigfile","UTF8")
// var write = fs.createWriteStream("bigfile1","UTF8")

// read.on('pipe',()=>{
//     console.log("Piping is going on")
// })
// read.pipe(write)


//create the file into zip file 
//Important for ETP Transformable streams
// var zlib = require('zlib');
// const fs = require('fs');
// var gzip = zlib.createGzip();  // create brotlicompress
// var r = fs.createReadStream('bigfile','utf8');
// var w = fs.createWriteStream('bigfile.gz');
// r.pipe(gzip).pipe(w);


// var zlib = require('zlib');
// const fs = require('fs');
// var gzip = zlib.createBrotliCompress();  // create brotlicompress
// var r = fs.createReadStream('bigfile1','utf8');
// var w = fs.createWriteStream('bigfile1.gz');
// r.pipe(gzip).pipe(w);



//Read the file data on to the web browsers
const fs = require('fs');
var http = require('http');
http.createServer((req,res)=>{
    var data1 = '';
    var reader = fs.createReadStream('bigfile');
    reader.setEncoding('UTF8');
    reader.on('data',function(chunk){
        data1 = chunk;
    });
    reader.on('end',function(){{
        res.end(data1);
    }})

}).listen(3000);


