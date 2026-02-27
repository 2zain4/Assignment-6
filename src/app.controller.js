import express from "express";
import {  checkConnectionDB, checkSyncDB } from "./DB/connectionDB.js";
import userRouter from "./modules/user.controller.js";
import postRouter from "./modules/posts/post.controller.js";
import commentRouter from "./modules/comment/comment.controller.js";
const app = express();
const PORT = 3000;


 const bootstrap =() => {

    app.use(express.json());

    checkConnectionDB();
    checkSyncDB();

    app.get('/',(req,res,next)=> res.send("Hello World"));

    app.use("/users",userRouter)
    app.use("/posts",postRouter)
    app.use("/comment",commentRouter)




    app.use("{/*demo}",(req,res,next)=> {
        res.status(200).json({message:'url not found'})
    } );
    app.listen(PORT,()=> console.log(`Server is running on http://localhost:${PORT}`));
}

export default bootstrap ;