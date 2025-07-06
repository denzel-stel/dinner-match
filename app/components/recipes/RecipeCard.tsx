import colors from "@/assets/styles/colors";
import styles from "@/assets/styles/typography";
import typography from "@/assets/styles/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { isTypedArray } from "util/types";
import { Recipe} from "database/models/Recipe";
import { faker } from "@faker-js/faker/.";
import Card from "../Card";
const RecipeCard = ({recipe}:  { recipe: Recipe }) => {
    return (
        <View style={style.wrapper}>
            {/* <Image style={style.thumbnail} source={{
                    uri: "https://picsum.photos/200/300"
                }} ></Image> */}
            <Card>
                <Text>Hello world</Text>
            </Card>
            <View style={style.card}>   
                <Text style={typography.h1}>{recipe.name}</Text>
            </View>
        </View>
       
    );
}


const style = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 16,
        flex: 1,
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)"
    },
    thumbnail: {
        width: "100%",
        height: 400,
        backgroundColor: colors.tintColor,
        borderRadius:16,
        padding: 1
    },
    wrapper: {
        width: "100%",
        height: "80%",
    }
})
export default RecipeCard;