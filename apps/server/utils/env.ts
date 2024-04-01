import { cleanEnv, str, num, url } from "envalid";

const env = cleanEnv(process.env, {});

export default env;
