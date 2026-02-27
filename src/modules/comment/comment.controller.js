import { Router } from "express";
import * as PS from "./comment.service.js";

const commentRouter= Router();


commentRouter.get("/", PS.getComment)

commentRouter.post("/", PS.createComment)

commentRouter.patch("/:id", PS.updateComment)

commentRouter.post("/findorcreate", PS.findOrCreateComment);

commentRouter.get("/search", PS.searchComments);




export default commentRouter ;
