import RecipeController from "../controllers/RecipeController";
import {expressApp} from "../api";

const recipeController = new RecipeController();

expressApp.get("/auth/recipes", recipeController.getAll);
expressApp.get("/auth/recipes/:id", recipeController.getById);