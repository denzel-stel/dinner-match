import { expressApp } from "../api";
import container from "#api/containers/container";
import UserControllerInterface from "#api/controllers/interfaces/UserControllerInterface.js";

const controller = container.get<UserControllerInterface>("UserController");

expressApp.get("/auth/users", controller.getAll);

expressApp.get("/auth/users/:id", controller.getById);

expressApp.post("/users", controller.create);