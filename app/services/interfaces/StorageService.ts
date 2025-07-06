interface StorageService {
    saveToken(token: string): void;
    getToken(): Promise<string>;
}