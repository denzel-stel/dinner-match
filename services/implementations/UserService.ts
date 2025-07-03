import { User } from "../../database/src/models";
import UserServiceInterface from "../interfaces/UserServiceInterface";

class UserService implements UserServiceInterface {

    async getUserById(): Promise<void> {
        return null;    
    };
}

export default UserService;