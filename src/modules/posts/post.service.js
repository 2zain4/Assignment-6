import commentModel from "../../DB/models/comment.model.js";
import postModel from "../../DB/models/post.model.js";
import userModel from "../../DB/models/user.model.js";

export const getPosts = async (req, res, next) => {
  const posts = await postModel.findAll({
    include: {
      model: userModel,
      model: commentModel,
    },
  });
  res.status(200).json({ massage: "done", posts });
};

export const createPost = async (req, res, next) => {
  try {
    const userExist = await userModel.findByPk(req.body.userId);

    if (!userExist) {
      return res.status(400).json({ massage: "user not found" });
    }
    const post = await postModel.create(req.body);
    res.status(201).json({ massage: "done", post });
  } catch (error) {
    res.status(400).json({ massage: error.message, stack: error.stack });
  }
};

export const deletepost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await postModel.destroy({
      where: { id },
    });

    user > 0
      ? res.status(200).json({ massage: "deleted", user })
      : res.status(400).json({ massage: "not found" });
  } catch (error) {
    return res.status(400).json({ massage: "error", error });
  }
};
