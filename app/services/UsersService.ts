import { createUser, getUserByStych } from "@/controllers/users";
import { User } from "@stytch/react-native";
import { AxiosError } from "axios";

class UsersService {
  
    async persistStytchUserLocally(stytchUser: User): Promise<void>  {
      try {
        const response = await getUserByStych(stytchUser.user_id);
        console.log("frontend response", response);
        if (response.status === 200) {
          return;
        }
      }
      catch (error) {
        if (error instanceof AxiosError && error.status === 404) {
          await createUser({
            email: stytchUser.emails[0].email,
            stytch_uuid: stytchUser.user_id,
            username: stytchUser.name.first_name,
            first_name: stytchUser.name.first_name,
            last_name: stytchUser.name.last_name,
          })
        }
      }
       
    }
}

export default new UsersService();