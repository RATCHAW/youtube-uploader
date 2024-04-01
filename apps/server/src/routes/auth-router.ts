import { Router } from "express";
import { googleAuth, googleCallback } from "@/controllers/auth/auth-google";

export const authRouter: Router = Router();

authRouter.get("/google", googleAuth);
authRouter.get("/google/callback", googleCallback);
