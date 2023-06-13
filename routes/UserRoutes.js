import express from "express";
import {  register} from "../controllers/Usercontrollers.js";
import { registrationCheck } from "../middleware/middleware.js";


var router = express.Router();


router.post('/register',registrationCheck,register)



export default router;