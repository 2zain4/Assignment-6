import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
// import { content } from "process";
import postModel from "./post.model.js";
import userModel from "./user.model.js";

const commentModel = sequelize.define("comment", {
    content:{
        type:DataTypes.TEXT,
    allowNull:false,
    },
},
{
    timestamps:true,
        updatedAt:true,
        createdAt:true,
}
)



export default commentModel ;