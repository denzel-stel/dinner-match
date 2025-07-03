import { Container } from "inversify";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import UserController from "../controllers/UserController";

const container: Container = new Container({parent: rootContainer});
container.bind(Contracts.UserController).to(UserController);