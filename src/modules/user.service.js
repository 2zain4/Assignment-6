import postModel from "../DB/models/post.model.js";
import userModel from "../DB/models/user.model.js";


export const createUser = async (req, res, next) => {
  try {
    const { userName, email, password, age, gender } = req.body//

    const existingUser = await userModel.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    const user = await userModel.upsert({ userName, email, password, age, gender });


    return res.status(200).json({ massage: "created", user });
  } catch (error) {
    return res.status(400).json({ massage: "error", error });


  }

}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [user, created] = await userModel.upsert(
      { id, ...req.body },
      { validate: false }
    );

    return res.status(200).json({
      message: "User created or updated successfully", user
    });

  } catch (error) {
    return res.status(400).json({ message: "error", error });
  }
};


export const getUser = async (req, res, next) => {
  try {

    const { id } = req.params

    const user = await userModel.findByPk(id);

    if (user) {
      return res.status(200).json({
        message: "done", user
      });
    }

    res.status(409).json({ massage: "not found" });
  } catch (error) {
    return res.status(400).json({ massage: "error", error });


  }

}



export const getUsers = async (req, res) => {
  try {
    const { email } = req.query;

    const user = await userModel.findOne({
      where: { email }
    });

    if (!user) {
      return res.status(404).json({
        message: "no user found"
      });
    }

    return res.status(200).json({ user });

  } catch (error) {
    return res.status(400).json({
      message: "error",
      error
    });
  }
};



export const deleteUser = async (req, res, next) => {
  try {

    const { id } = req.params

    const user = await userModel.destroy({
      where: { id }
    });

    user > 0 ? res.status(200).json({ massage: "deleted", user }) : res.status(400).json({ massage: "not found" });
  } catch (error) {
    return res.status(400).json({ massage: "error", error });


  }

}



