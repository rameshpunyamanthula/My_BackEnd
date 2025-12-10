import bodyParser from 'body-parser';
import express from 'express'

const app=express()

app.use(express.json());
app.use(bodyParser.json())
app.get('/get-users',(req,res)=>{
    console.log("Nodemone Workings")
    res.send("You are at users page")
})

app.post('/add-users',(req,res)=>{
    let data=req.body;
    console.log(data)
    
    res.send("data added")
})

app.put('/update-users',(req,res)=>{
    let new_user=req.body
    console.log(new_user.new_user)
    console.log(new_user.RollNumber)
    res.send("New user added")
})
app.delete('/del-users',(req,res)=>{
    let user=req.body
    console.log(user.user)
    res.send("User Removed")
})

app.listen(2027,()=>{
    console.log(`Server running at port ${2027}`)
})