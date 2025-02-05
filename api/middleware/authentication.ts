import {Client} from "stytch";
import { ClientConfig } from "stytch/types/lib/shared/client";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export default function checkAuthenticated(req: AxiosResponse) {
    const config: ClientConfig = {
        project_id: process.env.STYTCH_PROJECT_ID || "",
        secret: process.env.STYTCH_SECRET_KEY || ""
    };
   const client = new Client(config);

   client.sessions.authenticate({
    session_token: req.data.session_token
   });
}