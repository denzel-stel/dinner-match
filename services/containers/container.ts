import { Container } from "inversify";
import UserService from "../implementations/UserService";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import AuthSessionService from "#services/implementations/AuthSessionService.js";
import OsloHashService from "#api/services/OsloHashService.js";

const container: Container = new Container({parent: rootContainer});
container.bind(Contracts.UserService).to(UserService);
container.bind(Contracts.AuthSessionService).to(AuthSessionService); // Assuming AuthSessionService is implemented in UserService
container.bind(Contracts.HashService).to(OsloHashService);