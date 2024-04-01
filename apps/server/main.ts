import express from "express";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { GoogleAuth2Strategy } from "@/strategies/google-strategy";
import { authRouter } from "@/routes/auth-router";

const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(passport.initialize());
passport.use(GoogleAuth2Strategy);

app.use("/auth", authRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    return res.status(500).json({
        message: "Internal server error",
    });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
