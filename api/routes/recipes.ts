import RecipeController from "../controllers/RecipeController";
import {expressApp} from "../api";

const recipeController = new RecipeController();

expressApp.get("/recipes", recipeController.getAll);
expressApp.get("/recipes/:id", recipeController.getById);