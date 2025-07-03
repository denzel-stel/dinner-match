import { Recipe } from "dinner-match-database/models";
import { Session } from "dinner-match-database/models";
import { User } from "dinner-match-database/models";

interface SessionRecipesEngineInterface {
    getUnswiped (session: Session, user: User): Recipe[];
 
    getAll(session: Session): Recipe[]; 

    getMostLiked(session: Session, user: User): Recipe[];

    getUnanimouslyLiked(session: Session): Recipe[];
};

export default SessionRecipesEngineInterface;