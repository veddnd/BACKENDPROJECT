// import {Router} from "express"


// const userrouter= Router()

// Router.route("/register").post(registeruser)

// export default userrouter
import { Router } from "express";
import { registeruser } from "../controllers/user.controller.js"; // Ensure the path is correct

const userrouter = Router();

userrouter.route("/register").post(registeruser);

export default userrouter;
