import AuthSessionService from "#services/implementations/AuthSessionService.js";

export const Contracts = {
    UserService: Symbol.for("UserService"),
    AuthSessionService  : Symbol.for("AuthSessionService"),
}