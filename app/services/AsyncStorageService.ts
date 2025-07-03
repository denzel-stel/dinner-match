import AsyncStorage from '@react-native-async-storage/async-storage';
class AsyncStorageService {
    async saveToken(session_token: string ) {
        await AsyncStorage.setItem('session_token', session_token);
    }

    async getToken() {
        return await AsyncStorage.getItem('session_token');
    }
}

export default new AsyncStorageService();