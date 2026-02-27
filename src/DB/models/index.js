import userModel from "./user.model.js";
import postModel from "./post.model.js";
import commentModel from "./comment.model.js";

/* ========== User - Post ========== */
userModel.hasMany(postModel, { onDelete: "CASCADE",onUpdate:"CASCADE" });

postModel.belongsTo(userModel);

/* ========== Post - Comment ========== */
postModel.hasMany(commentModel, { onDelete: "CASCADE" ,onUpdate:"CASCADE" });
commentModel.belongsTo(postModel);

/* ========== User - Comment ========== */
userModel.hasMany(commentModel, { onDelete: "CASCADE",onUpdate:"CASCADE" });
commentModel.belongsTo(userModel);

export {
  userModel,
  postModel,
  commentModel
};