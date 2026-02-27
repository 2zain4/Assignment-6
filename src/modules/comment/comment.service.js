import postModel from "../../DB/models/post.model.js";
import userModel from "../../DB/models/user.model.js";
import commentModel from "../../DB/models/comment.model.js";
import { Op } from "sequelize";

export const getComment = async (req, res, next) => {
  const comment = await commentModel.findAll({
    include: {
      model: userModel,
      model: postModel,

      // as:"user",
    },
  });
  res.status(200).json({ massage: "done", comment });
};

export const createComment = async (req, res, next) => {
  try {
    const userExist = await userModel.findByPk(req.body.userId);

    if (!userExist) {
      return res.status(400).json({ massage: "user not found" });
    }
    const comment = await commentModel.create(req.body);
    res.status(201).json({ massage: "done", comment });
  } catch (error) {
    res.status(400).json({ massage: error.message, stack: error.stack });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, content } = req.body;

    const comment = await commentModel.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    if (comment.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this comment." });
    }

    comment.content = content;
    await comment.save();

    return res.status(200).json({
      message: "Comment updated.",
      comment,
    });
  } catch (error) {
    return res.status(500).json({ message: "error", error });
  }
};

export const findOrCreateComment = async (req, res) => {
  try {
    const { postId, userId, content } = req.body;

    const [comment, created] = await commentModel.findOrCreate({
      where: { postId, userId, content },
      defaults: { postId, userId, content },
    });

    return res.status(200).json({ comment, created });
  } catch (error) {
    return res.status(400).json({ message: "error", error });
  }
};

export const searchComments = async (req, res) => {
  try {
    const { word } = req.query;

    const { count, rows } = await commentModel.findAndCountAll({
      where: {content: {[Op.like]: `%${word}%`, },},
    });

    if (count === 0) {
      return res.status(404).json({message: "no comments found.",});
    }

    return res.status(200).json({ count,comments: rows,});
  } catch (error) {
    return res.status(400).json({message: "error",error, });
  }
};


