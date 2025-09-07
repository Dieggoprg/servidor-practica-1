import express from "express";
import {startDb} from "./src/config/database.js"
import "dotenv/config";

const app = express();
const PORT = process.env.PORT

app.use(express.json());

startDb().then(() => {
    app.listen(PORT, ()=> {
        console.log("server running on the port: ", PORT)
    })
})