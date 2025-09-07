import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define("Users", 
    {
        name: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        age: {type: DataTypes.INTEGER, allowNull: false},
        sex: {type: DataTypes.ENUM("masculino", "femenino")}
    }
)