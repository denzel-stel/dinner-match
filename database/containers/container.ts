import { Container } from "inversify";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import UserRepository from "#database/repositories/UserRepository.js";
import AuthSessionRepository from "#database/repositories/AuthSessionRepository.js";
import UserRepositoryInterface from "#database/repositories/interfaces.ts/UserRepositoryInterface.js";
import AuthSessionRepositoryInterface from "#database/repositories/interfaces.ts/AuthSessionRepositoryInterface.js";

const container: Container = new Container({parent: rootContainer});

container.bind<UserRepositoryInterface>(Contracts.UserRepository).to(UserRepository);
container.bind<AuthSessionRepositoryInterface>(Contracts.AuthSessionRepository).to(AuthSessionRepository);
export default container;