import { Router } from "express";
import * as PS from "./post.service.js";

const postRouter= Router();

postRouter.get("/", PS.getPosts)
postRouter.post("/", PS.createPost)
postRouter.delete("/:id", PS.deletepost)




export default postRouter ;