import { injectable } from "inversify";
import UserServiceInterface from "../interfaces/UserServiceInterface";

@injectable()
class UserService implements UserServiceInterface {

    async getUserById(): Promise<void> {
        return null;    
    };
}

export default UserService;