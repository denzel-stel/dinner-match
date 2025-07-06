import {Session} from 'database/models/Session';
import { Image, StyleSheet, View } from 'react-native';
const LikedBy = ({ session }: {session: Session}) => {
    // Calls session participants async 
    // Loads corresponding avatar 
  
    return (
        <View style={style.particpants}>

            <Image
            style={style.avatar}
            source={{
                uri: "https://picsum.photos/200/300",
            }}></Image>

            <Image
            style={style.avatar}
            source={{
                uri: "https://picsum.photos/200/300",
            }}></Image>
            <Image
            style={style.avatar}
            source={{
                uri: "https://picsum.photos/200/300",
            }}></Image>
        </View>
    );
}

const style = StyleSheet.create({
    avatar: {
        height: 26,
        width: 26,
        borderRadius:9999,
        borderColor: "white",
        borderWidth: 2,
        marginLeft: -5
    },
    particpants: {
        flexDirection: "row",
    }
});
export default LikedBy;