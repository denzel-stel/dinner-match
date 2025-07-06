import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import textStyle from "@/assets/styles/typography";
import colors from "@/constants/ColorScheme";
import SessionParticipants from "./SessionParticipants";
const SessionHeader = (): JSX.Element => {
  const session = {
    id: 1,
    admin_id: 1,
    started_at: new Date(),
    ends_at: new Date(),
  };

  return (
    <View
      style={{
        padding: 26,
        backgroundColor: "white",
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)",
      }}
    >
      <View style={{ gap: 12, flexDirection: "column", justifyContent: "space-between" }}>
        <View>
          <View style={{alignItems: "flex-end"}}>
            <Pressable>
              <Icon
                name="sliders"
                style={{ color: colors.label }}
                size={22}
              ></Icon>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text style={textStyle.h2}>Studenten huis 1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Icon
                name="user"
                style={{ color: colors.label }}
                size={16}
              ></Icon>
              <Text style={textStyle.label}>5 personen</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Icon name="leaf" style={{ color: "green" }} size={16}></Icon>
              <Text style={textStyle.label}>vegetarisch</Text>
            </View>
          </View>
        </View>

        <SessionParticipants session={session} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default SessionHeader;
