import express from "express";
import env from "./utils/env";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    return res.status(500).json({
        message: "Internal server error",
    });
});

app.listen(4000, () => {
    console.log("Server is running on port 3000");
});
