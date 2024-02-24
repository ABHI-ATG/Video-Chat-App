const express=require('express');
const app=express();

const cors=require("cors");
app.use(cors());
app.use(express.json())


require('dotenv').config();
const port=process.env.PORT


app.get('/',(req,res)=>{
    res.status(200).json("Success")
})


const restApi=require('./routes/restapi');
app.use('/api',restApi);


// socketIO
const http=require('http')
const socketIO=require("socket.io")
const server=http.createServer(app)
const io=socketIO(server)

io.on('connection',(socket)=>{
    console.log('A user connected')

    socket.on('disconnect',()=>{
        console.log("A user disconnected");
    })
});


server.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})