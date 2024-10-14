/*const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on('request',(req,res)=>{
   var fs=require("fs")
   fs.readFile("input.txt",(err,data)=>{
    if(err) return console.log.error(err);
    res.end(data.toString());
   })
})
server.listen(8000,"127.0.0.1");*/
/*const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
const rstream=fs.createReadStream("inputs.txt")
rstream.on('data',(chunckdata)=>{
    res.write(chunckdata)
})
rstream.on("end",()=>{
    res.end();
})
rstream.on("error",(err)=>{
console.log(err);
res.end();
})
})
server.listen(8000,"127.0.0.1")*/

const fs=require("fs");//read and write using  pipe()
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
const rstream=fs.createReadStream("input.txt")
rstream.pipe(res);
})
server.listen(8000,"127.0.0.1");