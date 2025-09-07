import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const ProductModel = sequelize.define("Products",
    {
        name: {type: DataTypes.STRING, allowNull: false, unique: true},
        size: {type: DataTypes.ENUM("grande", "mediano", "pequeño"), allowNull: false},
        price: {type: DataTypes.DECIMAL, allowNull: false}
    }
)