// var event = require("events")
// var obj = new event()
// obj.addListener('dance',(msg)=>{
//     console.log("hello"+msg)
// })
// obj.on('dance',(msg)=>{
//     console.log("HEllo"+msg)
// })
// obj.emit('dance',"let's dance")
// obj.emit('dance', "let's dancing")

// console.log(obj.getMaxListeners())
// event.defaultMaxListeners=3
// obj.setMaxListeners(7)
// for(i=0;i<5;i++){
//     obj.on('dance',(msg)=>{
//         console.log("hello"+msg)
//     })
// }
//IMPORTANT
function welcome(){
    console.log("welcome");
}
var id1 = setTimeout(welcome,2000);
let count = 0;
const intervalId = setInterval(()=>{
    console.log('Hello');
    count++;
    if (count===5){
        console.log('CLearing the interval id after 5 executions');
        clearInterval(intervalId)
    }
},1000)