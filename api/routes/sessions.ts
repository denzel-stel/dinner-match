import { expressApp } from "../api.js";
import sessionController from "../controllers/SessionController.js";


expressApp.get("/auth/users/:userId/sessions", sessionController.getForUser);
expressApp.post("/auth/users/:userId/sessions/:sessionId", sessionController.joinSession);