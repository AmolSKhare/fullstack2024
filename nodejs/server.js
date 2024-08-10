const express = require('express');
var bodyParser = require('body-parser')
const multer = require('multer');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
app.use(express.json());
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

//handling the form data in post method  using multer
app.post('/', multer().none(),(req, res)=>{
    res.send(JSON.stringify(`welcome ${req.body.name}`));
})

app.post('/welcome',(req, res)=>{
    res.send(JSON.stringify(`welcome ${req.body.name}`));
})
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);