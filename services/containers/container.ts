import { Container } from "inversify";
import UserService from "../implementations/UserService";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";

const container: Container = new Container({parent: rootContainer});
container.bind(Contracts.UserService).to(UserService);