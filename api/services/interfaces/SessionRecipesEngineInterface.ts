import { Recipe } from "#database/models";
import { Session } from "#database/models";
import { User } from "#database/models";

interface SessionRecipesEngineInterface {
    getUnswiped (session: Session, user: User): Recipe[];
 
    getAll(session: Session): Recipe[]; 

    getMostLiked(session: Session, user: User): Recipe[];

    getUnanimouslyLiked(session: Session): Recipe[];
};

export default SessionRecipesEngineInterface;