import Container from "@/components/Container";
import { useCallback } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "@/components/Button";
import Card from "@/components/Card";
const Profile = () => {
  return (
    <View style={{
        flex: 1,
        gap: 16,
    }}>
    <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
        <Image
            source={{
            uri: "https://avatars.githubusercontent.com/u/177841112?v=4&size=64",
            }}
            style={styles.profileImage}
        />
        </View>

        <Text style={styles.username}>@sjos12</Text>
        <Text style={styles.fullName}>Denzel Stellingwerf</Text>

        <PrimaryButton text="bewerken"></PrimaryButton>
    </View>

    <Card>
        <View style={styles.contactRow}>
        <Text style={styles.contactLabel}>email</Text>
        <Text style={styles.contactValue}>
            denzelstellingwerf@outlook.com
        </Text>
        </View>

        <View style={styles.contactRow}>
        <Text style={styles.contactLabel}>Phone number</Text>
        <Text style={styles.contactValue}>+31 6 26560800</Text>
        </View>
    </Card>

    {/* Settings Options */}

    <Card>
        <View style={styles.settingIconContainer}>
        <View style={[styles.settingIcon, { backgroundColor: "#4A90E2" }]}>
            <Text style={styles.settingIconText}>📱</Text>
        </View>
        </View>
        <Text style={styles.settingText}>abbonement inzien</Text>
    </Card>

    <Card>
        <View style={styles.settingIconContainer}>
        <View style={[styles.settingIcon, { backgroundColor: "#7ED321" }]}>
            <Text style={styles.settingIconText}>❤️</Text>
        </View>
        </View>
        <Text style={styles.settingText}>eet voorkeuren</Text>
    </Card>

    {/* Logout Button */}
    <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>uitloggen</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2c2c2c",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImageContainer: {
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2c2c2c",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#FF9500",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  contactInfo: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#4A90E2",
  },
  contactRow: {
    marginBottom: 16,
  },
  contactLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: "#2c2c2c",
    fontWeight: "500",
  },
  settingsOptions: {
    marginBottom: 50,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  settingIconContainer: {
    marginRight: 16,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  settingIconText: {
    fontSize: 18,
  },
  settingText: {
    fontSize: 16,
    color: "#2c2c2c",
    fontWeight: "500",
  },
  logoutButton: {
    alignItems: "center",
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    color: "#FF9500",
    fontWeight: "500",
  },
});
export default Profile;
