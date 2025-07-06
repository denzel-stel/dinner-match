import SessionRepository from "#database/repositories/SessionRepository.js";

export const Contracts = {
    // Controllers
    UserController: Symbol.for("UserController"),
    SessionController: Symbol.for("SessionController"),
    
    // App services
    StorageService: Symbol.for("StorageService"),

    // Services
    UserService: Symbol.for("UserService"),
    AuthSessionService: Symbol.for("AuthSessionService"),
    HashService: Symbol.for("HashService"),
    
    // Repository
    UserRepository: Symbol.for("UserRepository"),
    SessionRepository: Symbol.for("SessionRepository"),
    AuthSessionRepository: Symbol.for("AuthSessionRepository")
}

