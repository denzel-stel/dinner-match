import {Request, Response} from "express";
import {recipesTable} from "../tables";
import database from "../database";

class RecipeRepository {
    getAll = async (req: Request, res: Response): Promise<Array<any>> => {
        return database
        .select()
        .from(recipesTable);
    }
}

export default RecipeRepository;