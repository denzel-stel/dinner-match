import {Request, Response} from "express";
import {recipesTable} from "dinner-match-database/tables";
import database from "dinner-match-database/connection";

class RecipeRepository {
    getAll = async (req: Request, res: Response): Promise<Array<any>> => {
        return database
        .select()
        .from(recipesTable);
    }
}

export default RecipeRepository;