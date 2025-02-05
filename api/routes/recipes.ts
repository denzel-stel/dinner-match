import RecipeController from "../controllers/RecipeController";
import {expressApp} from "../api";
import checkAuthenticated from "../middleware/authentication";

const recipeController = new RecipeController();

expressApp.use("/auth/", checkAuthenticated);

expressApp.get("/auth/recipes", recipeController.getAll);
expressApp.get("/auth/recipes/:id", recipeController.getById);