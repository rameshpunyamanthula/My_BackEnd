import express from 'express';
import StudentRouter from './routes/studentRoutes.js';
import cors from 'cors';
const app = express();

app.use('/', StudentRouter);
app.use(cors());

app.get('/get-users',(req,res) =>{
    res.send("Hello this is get users endpoint");
})

app.post('/add-users',(req,res) =>{
    console.log(req.body);
    res.send("Data Added successfully");
})

app.listen(7007,() => {
    console.log("Server is running at port 7007");
})

// Frontend code
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import axios from 'axios'
// import './App.css'

// function App() {

//   let baseURL = "http://localhost:7007";

//   const getData = ()=>{
//     axios.get(`${baseURL}/get-users`)
//     .then((result) => console.log(result.data))
//     .catch((error) => console.log(error));
//   }


//   const addData = () =>{
//     let userData = {
//       name:"Thub",
//       rollno : "1234"
//     };
//     axios.post(`${baseURL}/add-users`,userData)
    
    
//     .then((result) => console.log(result.data))
//     .catch((error) => console.log(error));
//      console.log(userData);
//   }

//   return (
//     <>
//       <button onClick={getData}>Fetch Data</button>
//       <button onClick={addData}>Add Data</button>

//     </>
//   )
// }

// export default App
