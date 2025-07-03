import colors from "@/assets/styles/colors";
import styles from "@/assets/styles/typography";
import typography from "@/assets/styles/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { isTypedArray } from "util/types";
import { Recipe} from "@dinner_match/database/models/Recipe";
import { faker } from "@faker-js/faker/.";
const RecipeCard = ({recipe}:  { recipe: Recipe }) => {
    return (
        <View style={style.wrapper}>
            <View style={style.thumbnail} >
               
            </View>
            <View style={style.card}>
                <Text style={typography.h1}>{recipe.name}</Text>
            </View>
        </View>
       
    );
}


const style = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderTopWidth: 4,
        borderTopColor: colors.tintColor,
        padding: 20,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        flex: 1,
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)"
    },
    thumbnail: {
        width: "100%",
        height: 400,
        backgroundColor: colors.tintColor,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    wrapper: {
        width: "100%",
        height: "80%",
    }
})
export default RecipeCard;