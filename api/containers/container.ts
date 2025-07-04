import { Container } from "inversify";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import UserController from "#api/controllers/UserController.js";

const container: Container = new Container({parent: rootContainer});

container.bind<UserController>(Contracts.UserController).to(UserController);

export default container;