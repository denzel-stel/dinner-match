import {Request, Response} from "express";
import {recipesTable} from "../../database/models/recipes";
import RecipeRepository from "../repositories/RecipeRepository";


class RecipeController {

    private recipeRepository: RecipeRepository;
    constructor() {
        this.recipeRepository = new RecipeRepository();
    }

    public getAll = async (req: Request, res: Response) => {
        return this.recipeRepository.getAll(req, res);
    }
}


export default RecipeController;