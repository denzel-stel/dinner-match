import { Pressable, Text } from "react-native";
import buttonStyles from "@/assets/styles/buttons";
const primaryButton = ({
  text,
  onPress,
  color
}: {
  text?: string;
  color?: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable style={{
        ...buttonStyles.button,
        ...buttonStyles.primaryButton,
        backgroundColor: color,
    }} onPress={onPress}>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 16,
          fontFamily: "Inter_500Medium",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default primaryButton;
