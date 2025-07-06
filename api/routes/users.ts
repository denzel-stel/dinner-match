import { expressApp } from "../api.js";
import container from "#api/containers/container.js";
import UserControllerInterface from "#api/controllers/interfaces/UserControllerInterface.js";
import { Contracts } from "../../containers/contracts.js";

console.log("Setting up user routes...");
const controller = container.get<UserControllerInterface>(Contracts.UserController);

expressApp.get("/auth/users", controller.getAll);

expressApp.get("/auth/users/:id", controller.getById);

expressApp.post("/users", controller.create);