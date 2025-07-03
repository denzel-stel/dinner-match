import { expressApp } from "../api";
import sessionController from "../controllers/SessionController";


expressApp.get("/auth/users/:userId/sessions", sessionController.getForUser);
expressApp.post("/auth/users/:userId/sessions/:sessionId", sessionController.joinSession);