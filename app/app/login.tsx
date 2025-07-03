import typographyStyles from "@/assets/styles/typography";
import inputStyles from "@/assets/styles/input";
import PrimaryButton from "@/components/Button";
import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Link, useNavigation } from "expo-router";

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = () => {
        console.log('Logging', email, password);
    };

    const navigateRegister = () => {
        navigation.navigate('register');
    }
  
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        
      }}>
        <Text style={{
            ...typographyStyles.h1,
            paddingBottom: 10,
        }}>Inloggen</Text>
        <Text style={inputStyles.label}>Email</Text>
        <TextInput
        placeholder="Enter email"
        style={inputStyles.textInput}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        />

        <Text style={inputStyles.label}>Password</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <PrimaryButton onPress={handleLogin} text="Inloggen" />
        <Pressable onPress={navigateRegister}><Text>Account aanmaken?</Text></Pressable>
      </View>
    );
}

export default LogIn;