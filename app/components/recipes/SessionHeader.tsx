import { Text, View } from "react-native";

const SessionHeader = (): JSX.Element => {
    return (
        <View style={{ padding: 16, backgroundColor: '#f8f8f8', borderBottomWidth: 1, borderBottomColor: '#e0e0e0' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Session Header</Text>
        </View>
    );
}

export default SessionHeader;