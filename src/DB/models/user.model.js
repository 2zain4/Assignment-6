import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";

const userModel = sequelize.define(
  "user",
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      defaultValue: "male",
    },
  },
  {
    timestamps: true,
    updatedAt: true,
    createdAt: true,
  },
);

export default userModel;
