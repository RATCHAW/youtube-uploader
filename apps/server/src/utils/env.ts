import { cleanEnv, str, num, url } from "envalid";

const env = cleanEnv(process.env, {
    GOOGLE_CLIENT_ID: str(),
    GOOGLE_CLIENT_SECRET: str(),

    CLIENT_BASE_URI: url(),
});

export default env;
