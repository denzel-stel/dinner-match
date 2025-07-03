import { Slot } from "expo-router";
import { View } from "react-native"

const Container = ({children}: { children: JSX.Element}): JSX.Element => {
    const style = {
        flex: 1,
        padding: 20,
    };
    return (
        <View style={style}>
            { children }
        </View>
    );
};

export default Container;