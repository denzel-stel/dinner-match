import { Container } from "inversify";
import { Contracts } from "./contracts";
import { rootContainer } from "../../containers/container";
import UserRepository from "#database/repositories/UserRepository.js";

const container: Container = new Container({parent: rootContainer});

container.bind<UserRepository>(Contracts.UserRepository).to(UserRepository);

export default container;