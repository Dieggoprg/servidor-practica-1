import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const CtegoryModel = sequelize.define("Category",
    {
        name: {type: DataTypes.ENUM("tecnología", "Hogar", "Deporte", "Ropa", "Belleza", "Alimentos"), allowNull: false},
        description: {type: DataTypes.TEXT}
    }
)

