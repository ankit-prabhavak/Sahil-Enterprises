import express, { request } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./Config/connectionDB.js";

const PORT = process.env.PORT || 8000;

const app = express();

// Middlewares
app.use(cors());


app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({
    crossOriginResourcePolicy: false
}));


app.get("/", (request, response) => {
    // Server to client
    response.json({
        message: "Server is running " + PORT
    });
   
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

});