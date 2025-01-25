import RecipeController from "../controllers/RecipeController";
import { Router} from "express";
import {expressApp} from "../index";

const recipeController = new RecipeController();
const router = Router();

expressApp.get("/recipes", recipeController.getAll);
