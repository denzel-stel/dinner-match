import * as SecureStore from 'expo-secure-store';
import { injectable } from 'inversify';
import StorageService from './interfaces/StorageService';
@injectable()
class SecureStorageService implements StorageService {
    async saveToken(token: string ) {
        return await SecureStore.setItemAsync('session_token', token);
    }

    async getToken() {
        return await SecureStore.getItemAsync('session_token');
    }
}

export default SecureStorageService;