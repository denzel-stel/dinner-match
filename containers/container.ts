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
import AuthSessionRepositoryInterface from "#database/repositories/interfaces.ts/AuthSessionRepositoryInterface.js";
import UserRepositoryInterface from "#database/repositories/interfaces.ts/UserRepositoryInterface.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import HashServiceInterface from "#services/interfaces/HashService.js";
import OsloHashService from "#services/implementations/OsloHashService.js";
import AuthSessionService from "#services/implementations/AuthSessionService.js";
import SessionControllerInterface from "#api/controllers/interfaces/SessionControllerInterface.js";
import SessionController from "#api/controllers/SessionController.js";

// This is the root container for the application
const container = new Container();
// Api
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

export { container };