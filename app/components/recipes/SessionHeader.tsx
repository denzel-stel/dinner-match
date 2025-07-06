import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import textStyle from "@/assets/styles/typography";
import colors from "@/constants/ColorScheme";
const SessionHeader = (): JSX.Element => {
  return (
    <View
      style={{
        paddingTop: 36,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 36,
        backgroundColor: "white",
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)",
      }}
    >
      <View style={{ gap: 8 }}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'flex-end'}}>
            <Text style={textStyle.h1}>Studenten huis 1</Text>
            <Pressable>
                <Icon name="sliders" style={{color: colors.label}} size={26}></Icon>
            </Pressable>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Icon name="user" style={{ color: colors.label }} size={16}></Icon>
            <Text style={textStyle.label}>5 personen</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Icon name="leaf" style={{ color: "green" }} size={16}></Icon>
            <Text style={textStyle.label}>vegetarisch</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

export default SessionHeader;
