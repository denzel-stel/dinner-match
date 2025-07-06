
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
    AuthSessionRepository: Symbol.for("AuthSessionRepository")
}

