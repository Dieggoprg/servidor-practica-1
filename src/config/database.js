import "dotenv/config"
import  {Sequelize}  from "sequelize";

export const sequelize = new Sequelize(
    process.env.NAME_DB,
    process.env.USER_DB,
    process.env.PASSWORD_DB,
    {
        host: process.env.HOST_DB,
        dialect: process.env.DIALECT_DB
    }
);

export const startDb = async ()=>{
    try {
        await sequelize.authenticate()
        console.log("Authentication successful")

        await sequelize.sync()
        console.log("Successful synchronization")

    } catch (error) {
        console.log("An error occurred while connecting the server to the database.", error)
    }
}