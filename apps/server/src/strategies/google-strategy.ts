import env from "@/utils/env";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prismaClient from "@/config/prisma-client";

export const GoogleAuth2Strategy = new GoogleStrategy(
    {
        clientID: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails![0].value;
        const googleId = profile.id;

        try {
            const user = await prismaClient.user.upsert({
                where: {
                    email,
                },
                create: {
                    email,
                    googleId,
                },
                update: {},
            });

            if (!user) return done(null);

            return done(null, user);
        } catch (error) {
            return done(error as Error);
        }
    }
);
