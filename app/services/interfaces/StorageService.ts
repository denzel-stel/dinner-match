interface StorageService {
    saveToken(token: string): void;
    getToken(): Promise<string>;
}

export default StorageService;