import { Client } from "stytch";
import { ClientConfig } from "stytch/types/lib/shared/client";

const config: ClientConfig = {
    project_id: process.env.STYTCH_PROJECT_ID || "",
    secret: process.env.STYTCH_SECRET_KEY || ""
};

export default new Client(config)