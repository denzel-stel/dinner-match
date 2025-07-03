import { expressApp } from "../api";
import UserController from "../controllers/UserController";

expressApp.get("/auth/users", UserController.getAll);

expressApp.get("/auth/users/:id", UserController.getById);

expressApp.post("/users", UserController.create);