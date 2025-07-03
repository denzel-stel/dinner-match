import { DEFAULT_DARK_THEME, StytchStyles, StytchTheme } from "@stytch/react-native/dist/ui/shared/config";
import colors from "./colors";

const theme: StytchTheme = {
    ...DEFAULT_DARK_THEME,
    backgroundColor: colors.backgroundColor,
    inputTextColor: colors.textColor,
    buttonBackgroundColor: colors.primaryColor,
    buttonTextColor: "white",
    primaryTextColor: colors.textColor,
    inputBackgroundColor: colors.backgroundColor,
    inputBorderRadius: 16,
    buttonBorderRadius: 16,
    buttonBorderColor: colors.primaryColor,
    disabledButtonBorderColor: colors.disabled,
    disabledButtonBackgroundColor: colors.disabled,
    disabledButtonTextColor: colors.disabledText,
    secondaryTextColor: colors.textColor,
    errorColor: colors.primaryColor,
    logoUrl: "https://reactnative.dev/img/tiny_logo.png",
}
const stytchStyle: StytchStyles = {
    darkTheme: theme,
    lightTheme: theme,
}   
export default stytchStyle;