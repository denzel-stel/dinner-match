import { StyleSheet } from "react-native";
import ColorScheme from "../../constants/ColorScheme";
const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontFamily: "RobotoSerif_500Medium",
        color: "#383838",
    },
    h2: {
        fontSize: 26,
        fontFamily: "RobotoSerif_500Medium",
        color: "#383838",

    },
    h3: {
        fontSize: 22,
    },
    label: {
        fontSize: 16,
        fontFamily: "RobotoSerif_400Regular",
        color: ColorScheme.label,
    },
    p: {
        fontSize: 16,
        fontWeight: "regular",
    },
    small: {
        fontSize: 12,
        color: "#5A5A5A"
    }
});

export default styles;