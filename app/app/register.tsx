import typographyStyles from "@/assets/styles/typography";
import inputStyles from "@/assets/styles/input";
import PrimaryButton from "@/components/Button";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { NewUser } from "#database/dist/models/User";
import { createUser } from "@/controllers/users";

const Register = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const verifySamePassword = () => {
        if (password !== verifyPassword) {
            Alert.alert('Wachtwoorden komen niet overeen');
            return false;
        }
        return true;
    }

    const navigation = useNavigation();
    const handleRegister = async () => {
        if (!verifySamePassword()) {
            return;
        }
        const user: NewUser = {
            email: email,
            password: password,
            username: username,
            first_name: firstName,
            last_name: lastName,
        }

        await createUser(user);
    };

    const navigateLogin = () => {
        console.log('Navigating to login');
        navigation.navigate("login");
    }
  
    return (
      <View style={{
        flexDirection: "column",
        justifyContent: "center",
        rowGap: 12,
        flex:1,
      }}>
        <Text style={{
            ...typographyStyles.h1,
            paddingBottom: 10,
        }}>Account aanmaken</Text>
        <View>
            <Text style={inputStyles.label}>Voornaam</Text>
            <TextInput
            style={inputStyles.textInput}
            placeholder="Voornaam invoeren"
            value={firstName}
            onChangeText={setFirstName}
            />
        </View>
        <View>
            <Text style={inputStyles.label}>Achternaam</Text>
            <TextInput
            style={inputStyles.textInput}
            placeholder="Achternaam invoeren"
            value={lastName}
            onChangeText={setLastName}
            />
        </View>
        <View>
        <Text style={inputStyles.label}>Gebruikersnaam</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Gebruikersnaam invoeren"
        value={username}
        onChangeText={setUsername}
        />
        </View>
        <View>
      <Text style={inputStyles.label}>Email</Text>
        <TextInput
        placeholder="Enter email"
        style={inputStyles.textInput}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        />

        </View> 

        <View>

        <Text style={inputStyles.label}>Wachtwoord</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        </View>
        <View>
        <Text style={inputStyles.label}>Herhaal wachtwoord</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Enter password"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
        secureTextEntry
        />
        </View>
  

        <PrimaryButton onPress={handleRegister} text="Account aanmaken" />
        <Pressable onPress={navigateLogin}><Text>Heb je al een account? Inloggen</Text></Pressable>
      </View>
    );
}

export default Register;