import RecipeController from "../controllers/RecipeController.js";
import {expressApp} from "../api.js";

const recipeController = new RecipeController();

expressApp.get("/auth/recipes", recipeController.getAll);
expressApp.get("/auth/recipes/:id", recipeController.getById);