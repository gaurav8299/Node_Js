const abc = require('http')
const os = require('os')
abc.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write(`${os.freemem()}\n`)
    res.write("Hellow")
    res.end()
}).listen(8008, ()=>{
    console.log("Server is running")
})