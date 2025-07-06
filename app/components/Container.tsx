import { Slot } from "expo-router";
import { View } from "react-native"

const Container = ({children}: { children: JSX.Element}): JSX.Element => {
    const style = {
        padding: 16,
    };
    return (
        <View style={style}>
            { children }
        </View>
    );
};

export default Container;