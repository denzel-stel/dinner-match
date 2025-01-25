import {Request, Response} from "express";
import {recipesTable} from "../../database/models/recipes";
import database from "../database";

class RecipeRepository {
    getAll = async (req: Request, res: Response) => {
        const users = await database.select().from(recipesTable)
        let usersString: string = JSON.stringify(users);
        res.send(usersString);
    }
}

export default RecipeRepository;