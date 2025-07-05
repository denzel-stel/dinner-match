import { Container } from "inversify";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import UserController from "#api/controllers/UserController.js";
import UserControllerInterface from "#api/controllers/interfaces/UserControllerInterface.js";

const container: Container = new Container({parent: rootContainer});

container.bind<UserControllerInterface>(Contracts.UserController).to(UserController);

export default container;