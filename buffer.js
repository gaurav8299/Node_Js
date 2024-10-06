// var buf = Buffer.alloc(5);
// console.log(buf);
// const buf1 = Buffer.alloc(5,'a');
// console.log(buf1)

// var buf2 = (Buffer.from("hello"));
// console.log(buf2.toString());

// const buf1 = Buffer.from("What's up");
// const buf2 = Buffer.from('576861742773207570','hex');
// console.log(buf2.toString('utf8'));

// console.log(buf1.toString('hex'));

// const buf = new Buffer.alloc(50);
// var n = buf.write('This is the node.js class');
// console.log("The number of octets are:"+n);


// -------------CONCATENATION------------------------
// var buf1 = Buffer.from("Nice");
// var buf2 = Buffer.from(" to meet you");

// var buf3 = Buffer.concat([buf1,buf2],16);
// console.log(buf3.toString('utf8'));



//-----------------------COMPARISON-----------------------

// var buf1 = Buffer.from('ABCD');
// var buf2 = Buffer.from('abcd');

// var result = buf1.compare(buf2);
// if(result===0){
//     console.log(buf1+" is equal to "+buf2);
// }
// else{
//     console.log(buf1+" is not equal to "+buf2);
// }


// ---------------COPY BUFFERS----------------------

//create two buffer instances

// const buf1 = Buffer.from("aquickbrownfoxjumpsoverthelazydog");

// const buf2 = Buffer.from("?")
// buf1.copy(buf2,8,16,20);






//------EQUALS--------------------------

// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('414243','hex');

// const



//-------------------SLICE----------------------------

// const buffer = Buffer.from('Godforsake');
// const slicedBuffer = buffer.slice(0, 3);
// console.log(slicedBuffer.toString()); 

//-------------------------INCLUDES--------------------------

var buf = Buffer.from('Hello, and welcome to Punjab!');
console.log(buf.includes('danger'));

//----------------------------UNIT2 COMPLETE-----------------------------
