import { Container } from "inversify";
import {Contracts} from "./contracts.js";
import { container as rootContainer } from "../../containers/container.js";
import UserController from "#api/controllers/UserController.js";
import UserControllerInterface from "#api/controllers/interfaces/UserControllerInterface.js";

const container: Container = new Container({parent: rootContainer});

console.log("Container initialized for API controllers");

export default container;