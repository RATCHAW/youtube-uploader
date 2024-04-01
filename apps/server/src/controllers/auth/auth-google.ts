import passport from "passport";
import env from "@/utils/env";
import { NextFunction, Request, Response } from "express";

const googleAuth = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/youtube.upload",
        ],
        accessType: "offline",
    })(req, res, next);
};

const googleCallback = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
        "google",
        {
            failureRedirect: `${env.CLIENT_BASE_URI}/login`,
            successRedirect: `${env.CLIENT_BASE_URI}/dashboard`,
            passReqToCallback: true,
        },
        (err: any, user: Express.User) => {
            return res.status(201).redirect(`${env.CLIENT_BASE_URI}/dashboard`);
        }
    )(req, res, next);
};

export { googleCallback, googleAuth };
