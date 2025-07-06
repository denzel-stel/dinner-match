import UserControllerInterface from "#api/controllers/interfaces/UserControllerInterface.js";
import UserController from "#api/controllers/UserController.js";
import { Contracts } from "./contracts.js";
import UserService from "#services/implementations/UserService.js";
import UserServiceInterface from "#services/interfaces/UserServiceInterface.js";
import { Container } from "inversify";
import SecureStorageService from "#app/services/SecureStorageService.js";
import StorageService from "app/services/interfaces/StorageService.js";
import UserRepository from "#database/repositories/UserRepository.js";
import AuthSessionRepository from "#database/repositories/AuthSessionRepository.js";
import AuthSessionRepositoryInterface from "database/repositories/interfaces/AuthSessionRepositoryInterface.js";
import UserRepositoryInterface from "database/repositories/interfaces/UserRepositoryInterface.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import HashServiceInterface from "#services/interfaces/HashService.js";
import OsloHashService from "#services/implementations/OsloHashService.js";
import AuthSessionService from "#services/implementations/AuthSessionService.js";
import SessionControllerInterface from "#api/controllers/interfaces/SessionControllerInterface.js";
import SessionController from "#api/controllers/SessionController.js";
import SessionRepositoryInterface from "database/repositories/interfaces/SessionRepositoryInterface.js";
import SessionRepository from "#database/repositories/SessionRepository.js";
import GroupRepositoryInterface from "#database/repositories/interfaces/GroupRepositoryInterface.js";
import GroupRepository from "#database/repositories/GroupRepository.js";
import { Group } from "#database/models/Group.js";

// This is the root container for the application
const container = new Container();
// Api
container.bind<GroupRepositoryInterface>(Contracts.GroupRepository).to(GroupRepository).inSingletonScope();
container.bind<UserControllerInterface>(Contracts.UserController).to(UserController).inSingletonScope();
container.bind<SessionControllerInterface>(Contracts.SessionController).to(SessionController).inSingletonScope();

// App Services
container.bind<StorageService>(Contracts.StorageService).to(SecureStorageService);

// Services
container.bind<UserServiceInterface>(Contracts.UserService).to(UserService);
container.bind<AuthSessionServiceInterface>(Contracts.AuthSessionService).to(AuthSessionService); // Assuming AuthSessionService is implemented in UserService
container.bind<HashServiceInterface>(Contracts.HashService).to(OsloHashService);

// Database
container.bind<UserRepositoryInterface>(Contracts.UserRepository).to(UserRepository);
container.bind<AuthSessionRepositoryInterface>(Contracts.AuthSessionRepository).to(AuthSessionRepository);
container.bind<SessionRepositoryInterface>(Contracts.SessionRepository).to(SessionRepository);
container.bind<GroupRepositoryInterface>(Contracts.GroupRepository).to(GroupRepository);
export { container };