import { Container } from "inversify";
import {Contracts} from "./contracts.js";
import { rootContainer } from "../../containers/container.js";
import UserController from "#api/controllers/UserController.js";
import UserControllerInterface from "#api/controllers/interfaces/UserControllerInterface.js";

const container: Container = new Container({parent: rootContainer});

console.log("Container initialized for API controllers");
container.bind<UserControllerInterface>(Contracts.UserController).to(UserController).inSingletonScope();

export default container;