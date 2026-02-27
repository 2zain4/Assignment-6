import { Router } from "express";
import * as US from "./user.service.js";

const userRouter= Router();

userRouter.post("/singUP",US.createUser)
userRouter.get("/by-email", US.getUsers)

userRouter.put("/:id",US.updateUser)
userRouter.get("/:id",US.getUser)


userRouter.patch("/:id",US.updateUser)
userRouter.delete("/:id",US.deleteUser)






export default userRouter ;

