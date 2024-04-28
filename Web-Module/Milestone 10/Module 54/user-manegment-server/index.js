const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users =[
    {id:1, name:'Farhad', email:'farhadhossen2590@gmail.com'},
    {id:2, name:'Zarhad', email:'zarhadhossen9025@gmail.com'},
    {id:3, name:'Carhad', email:'carhadhossen5902@gmail.com'}
]
app.get('/',(req,res)=>{
    res.send('User Management System Is Running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log(req.body)
    const newUser = req.body;
    newUser.id =users.length +1 ;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port,()=>{
    console.log(`Server is running at PORT: ${port}`);
})