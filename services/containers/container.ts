import { Container } from "inversify";
import UserService from "../implementations/UserService";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import AuthSessionService from "#services/implementations/AuthSessionService.js";
import OsloHashService from "../implementations/OsloHashService.js";
import HashServiceInterface from "#services/interfaces/HashService.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import UserServiceInterface from "#services/interfaces/UserServiceInterface.js";

const container: Container = new Container({parent: rootContainer});
console.log("Container initialized for services");
container.bind<UserServiceInterface>(Contracts.UserService).to(UserService);
container.bind<AuthSessionServiceInterface>(Contracts.AuthSessionService).to(AuthSessionService); // Assuming AuthSessionService is implemented in UserService
container.bind<HashServiceInterface>(Contracts.HashService).to(OsloHashService);

export default container;