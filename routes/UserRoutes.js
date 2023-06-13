import express from "express";
import { register } from "../controllers.js/Usercontrollers.js";

var router = express.Router();


router.post('/register',register);


export default router;