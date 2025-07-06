import GroupController from "#api/controllers/GroupController.js";
import GroupRepository from "#database/repositories/GroupRepository.js";
import SessionRepository from "#database/repositories/SessionRepository.js";

export const Contracts = {
    // Controllers
    UserController: Symbol.for("UserController"),
    SessionController: Symbol.for("SessionController"),
    GroupController: Symbol.for("GroupController"),
    
    // App services
    StorageService: Symbol.for("StorageService"),

    // Services
    UserService: Symbol.for("UserService"),
    AuthSessionService: Symbol.for("AuthSessionService"),
    HashService: Symbol.for("HashService"),
    
    // Repository
    UserRepository: Symbol.for("UserRepository"),
    SessionRepository: Symbol.for("SessionRepository"),
    GroupRepository: Symbol.for("GroupRepository"),
    AuthSessionRepository: Symbol.for("AuthSessionRepository")
}

