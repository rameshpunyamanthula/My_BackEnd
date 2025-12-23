import express from "express";

import { getStudents, addStudent } from "../controllers/studentControllers.js";

const StudentRouter = express.Router();

StudentRouter.get("/get-students", getStudents);

StudentRouter.post("/add-students", addStudent);

export default StudentRouter;
