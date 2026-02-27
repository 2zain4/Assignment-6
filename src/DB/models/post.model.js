import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import { title } from "process";
import userModel from "./user.model.js";
import commentModel from "./comment.model.js";

const postModel = sequelize.define("post", {
    title:{
    type:DataTypes.STRING,
    allowNull:false,
    },
   
},
{
    timestamps:true,
        updatedAt:true,
        createdAt:true,
}
)



export default postModel ;