import { expressApp } from "../api";
import UserController from "../controllers/UserController";
import container from "#api/containers/container";

const controller = container.get<UserController>("UserController");

expressApp.get("/auth/users", controller.getAll);

expressApp.get("/auth/users/:id", controller.getById);

expressApp.post("/users", controller.create);