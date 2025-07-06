interface SessionRepositoryInterface {
    joinSession(sessionId: number, userId: number): Promise<void>;
    leaveSession(sessionId: number, userId: number): Promise<void>;
}

export default SessionRepositoryInterface;