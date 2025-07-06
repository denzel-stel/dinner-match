// #api/controllers/GroupController.ts

import GroupRepository from "database/repositories/GroupRepository.js";
import UserRepository from "database/repositories/UserRepository.js";
import SessionRepository from "database/repositories/SessionRepository.js"; // Importeer SessionRepository
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { Contracts } from "../../containers/contracts.js";
import GroupControllerInterface from "./interfaces/GroupControllerInterface.js";
import { AuthRequest } from "#api/requests/AuthRequest.js";
import { NewSession } from "#database/models/Session.js";
import { GroupMember } from "#database/models/Group.js";

@injectable()
class GroupController implements GroupControllerInterface {
    constructor(
        @inject(Contracts.GroupRepository) private groupRepository: GroupRepository,
        @inject(Contracts.UserRepository) private userRepository: UserRepository,
        @inject(Contracts.SessionRepository) private sessionRepository: SessionRepository // Injecteer SessionRepository
    ) {}

    async createGroup(req: AuthRequest, res: Response): Promise<void> {
        const { title } = req.body;
        const userId = Number(req.params.userId); // Controleer of de gebruiker de groep mag updaten (optioneel)

        if (!title) {
            res.status(400).send({ message: "Groepstitel is vereist." });
            return;
        }

        try {
            const newGroup = await this.groupRepository.createGroup({ title }, userId);
            res.status(201).send(newGroup);
        } catch (error) {
            console.error("Fout bij het aanmaken van de groep:", error);
            res.status(500).send({ message: "Er is een fout opgetreden bij het aanmaken van de groep." });
        }
    }

    async joinGroup(req: AuthRequest, res: Response): Promise<void> {
        const groupId = Number(req.params.groupId);
        const userId = Number(req.params.userId); // Controleer of de gebruiker de groep mag updaten (optioneel)

        if (isNaN(groupId)) {
            res.status(400).send({ message: "Ongeldige groeps-ID." });
            return;
        }

        try {
            const groupExists = await this.groupRepository.getGroupById(groupId);
            if (!groupExists) {
                res.status(404).send({ message: "Groep niet gevonden." });
                return;
            }

            const isMember = await this.groupRepository.isUserInGroup(groupId, userId);
            if (isMember) {
                res.status(409).send({ message: "Gebruiker is al lid van deze groep." });
                return;
            }

            const groupMember = await this.groupRepository.joinGroup(groupId, userId);
            res.status(200).send(groupMember);
        } catch (error) {
            console.error("Fout bij het lid worden van de groep:", error);
            res.status(500).send({ message: "Er is een fout opgetreden bij het lid worden van de groep." });
        }
    }

    async getGroup(req: AuthRequest, res: Response): Promise<void> {
        const groupId = Number(req.params.groupId);

        if (isNaN(groupId)) {
            res.status(400).send({ message: "Ongeldige groeps-ID." });
            return;
        }

        try {
            const group = await this.groupRepository.getGroupById(groupId);
            if (!group) {
                res.status(404).send({ message: "Groep niet gevonden." });
                return;
            }

            const members = await this.groupRepository.getGroupMembers(groupId);
            res.status(200).send({ ...group, members });
        } catch (error) {
            console.error("Fout bij het ophalen van de groep:", error);
            res.status(500).send({ message: "Er is een fout opgetreden bij het ophalen van de groep." });
        }
    }

    async updateGroup(req: AuthRequest, res: Response): Promise<void> {
        const groupId = Number(req.params.groupId);
        const { title } = req.body;
        const userId = Number(req.params.userId); // Controleer of de gebruiker de groep mag updaten (optioneel)

        if (isNaN(groupId)) {
            res.status(400).send({ message: "Ongeldige groeps-ID." });
            return;
        }

        if (!title) {
            res.status(400).send({ message: "Nieuwe groepstitel is vereist." });
            return;
        }

        try {
            // Optionele controle: zorg ervoor dat alleen groepsbeheerders/aanmakers de groep kunnen updaten
            // Je zou hier een extra check in de repository kunnen toevoegen, of een 'owner_id' toevoegen aan groupsTable
            const updatedGroup = await this.groupRepository.updateGroup(groupId, title);
            if (!updatedGroup) {
                res.status(404).send({ message: "Groep niet gevonden of geen update uitgevoerd." });
                return;
            }
            res.status(200).send(updatedGroup);
        } catch (error) {
            console.error("Fout bij het bijwerken van de groep:", error);
            res.status(500).send({ message: "Er is een fout opgetreden bij het bijwerken van de groep." });
        }
    }

    async leaveGroup(req: AuthRequest, res: Response): Promise<void> {
        const groupId = Number(req.params.groupId);
        const userId = Number(req.params.userId);

        if (isNaN(groupId)) {
            res.status(400).send({ message: "Ongeldige groeps-ID." });
            return;
        }

        try {
            const isMember = await this.groupRepository.isUserInGroup(groupId, userId);
            if (!isMember) {
                res.status(404).send({ message: "Gebruiker is geen lid van deze groep." });
                return;
            }

            await this.groupRepository.leaveGroup(groupId, userId);
            res.status(200).send({ message: "Groep succesvol verlaten." });
        } catch (error) {
            console.error("Fout bij het verlaten van de groep:", error);
            res.status(500).send({ message: "Er is een fout opgetreden bij het verlaten van de groep." });
        }
    }

    async startSessionFromGroup(req: AuthRequest, res: Response): Promise<void> {
        const groupId = Number(req.params.groupId);
        const userId = Number(req.params.userId); // De gebruiker die de sessie start

        if (isNaN(groupId)) {
            res.status(400).send({ message: "Ongeldige groeps-ID." });
            return;
        }

        try {
            const group = await this.groupRepository.getGroupById(groupId);
            if (!group) {
                res.status(404).send({ message: "Groep niet gevonden." });
                return;
            }

            const groupMembers: GroupMember[] = await this.groupRepository.getGroupMembers(groupId);
            const memberUserIds = groupMembers.map(member => member.user_id);

            // Controleer of de gebruiker die de sessie start, lid is van de groep
            if (!memberUserIds.includes(userId)) {
                res.status(403).send({ message: "U bent geen lid van deze groep en kunt geen sessie starten." });
                return;
            }

            // Maak een nieuwe sessie aan. Je moet beslissen welke parameters je wilt meegeven
            // Voor nu nemen we aan dat je een 'title' en 'deadline' nodig hebt voor de sessie.
            // Deze kunnen via de request body worden meegegeven.
            const { sessionTitle, deadline } = req.body;

            if (!sessionTitle || !deadline) {
                res.status(400).send({ message: "Sessie titel en deadline zijn vereist." });
                return;
            }

            // Controleer of de deadline een geldige datum is
            const parsedDeadline = new Date(deadline);
            if (isNaN(parsedDeadline.getTime())) {
                res.status(400).send({ message: "Ongeldig deadline formaat." });
                return;
            }

            const session: NewSession = {
                sessionTitle,
                admin_id: userId,
                ends_at: deadline,
                start_at: new Date(),
            }

            // Maak de sessie aan en voeg de groepsleden toe
            const newSession = await this.sessionRepository.createSession(
                session,
                memberUserIds,
            );

            res.status(201).send(newSession);
        } catch (error) {
            console.error("Fout bij het starten van de sessie vanuit de groep:", error);
            res.status(500).send({ message: "Er is een fout opgetreden bij het starten van de sessie." });
        }
    }
}

export default GroupController;