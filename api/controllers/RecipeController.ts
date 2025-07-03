import {Request, Response} from "express";
import RecipeRepository from "../repositories/RecipeRepository";


class RecipeController {

    private recipeRepository: RecipeRepository;
    constructor() {
        this.recipeRepository = new RecipeRepository();
    }

    public getAll = async (req: Request, res: Response): Promise<void> => {
        const recipes = await this.recipeRepository.getAll(req, res);
        res.send(recipes);
    }

    getById() {

    }
}


export default RecipeController;