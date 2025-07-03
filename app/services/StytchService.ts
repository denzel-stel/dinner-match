import { createUser, getUserByStych } from "@/controllers/users";
import { Session, User, useStytchUser } from "@stytch/react-native";
import UsersService from "./UsersService";

class StytchService {
    async onSessionChange(session: Session| null) {
        if (session == null) return;
        // return if session null
        // Store session_token somewhere
        // Append session_token credentials to axios
        // Store user locally
        // Redirect to home screen
    }
}

export default new StytchService();