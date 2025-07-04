import { Container } from "inversify";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import UserRepository from "#database/repositories/UserRepository.js";
import AuthSessionRepository from "#database/repositories/AuthSessionRepository.js";

const container: Container = new Container({parent: rootContainer});

container.bind<UserRepository>(Contracts.UserRepository).to(UserRepository);
container.bind<AuthSessionRepository>(Contracts.AuthSessionRepository).to(AuthSessionRepository);
export default container;