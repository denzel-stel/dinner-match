import { Recipe } from "#database/models";
import { Session } from "#database/models";
import { User } from "#database/models";
import SessionRecipesEngineInterface from "./interfaces/SessionRecipesEngineInterface";

class SessionRecipesEngine implements SessionRecipesEngineInterface {
    getUnswiped(session: Session, user: User): Recipe[] {
        // Implementation to get unswiped recipes for a user in a session
        return [];
    }

    getAll(session: Session): Recipe[] {
        // Implementation to get all recipes in a session
        return [];
    }

    getMostLiked(session: Session, user: User): Recipe[] {
        // Implementation to get most liked recipes for a user in a session
        return [];
    }

    getUnanimouslyLiked(session: Session): Recipe[] {
        // Implementation to get unanimously liked recipes in a session
        return [];
    }
}

export default new SessionRecipesEngine();