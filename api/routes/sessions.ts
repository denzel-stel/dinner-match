import { container } from "../../containers/container.js";
import { Contracts } from "../../containers/contracts.js";
import { expressApp } from "../api.js";
import SessionController from "../controllers/SessionController.js";

const sessionController = container.get<SessionController>(Contracts.SessionController);
expressApp.get("/auth/users/:userId/sessions", sessionController.getForUser);
expressApp.post("/auth/users/:userId/sessions/:sessionId", sessionController.joinSession);