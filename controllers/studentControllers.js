import student from "../models/studentsModels";
const getStudents = (req,res) => {
    let mydata = {name:"Rami", rollno:"4263"};
    res.status(200).json(mydata);
}

const addStudent = (req,res) => {
    res.status(201).json({message: "Student added successfully"});
}

export { getStudents, addStudent };
