import { Container } from "inversify";
import UserService from "../implementations/UserService.js";
import { Contracts } from "./contracts.js";
import { container as rootContainer } from "../../containers/container.js";
import AuthSessionService from "#services/implementations/AuthSessionService.js";
import OsloHashService from "../implementations/OsloHashService.js";
import HashServiceInterface from "#services/interfaces/HashService.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import UserServiceInterface from "#services/interfaces/UserServiceInterface.js";

const container: Container = new Container({parent: rootContainer});
console.log("Container initialized for services");

export default container;