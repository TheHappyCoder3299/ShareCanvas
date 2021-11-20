const express=require('express')
const app=express()
const server=app.listen(3000)
const socket=require('socket.io')
const io=socket(server)

app.use(express.static('public'))

io.sockets.on('connection',(socket)=>{
    console.log(socket.id);
})