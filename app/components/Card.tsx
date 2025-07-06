import colors from "@/assets/styles/colors";
import styles from "@/assets/styles/typography";
import typography from "@/assets/styles/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { isTypedArray } from "util/types";
import { Recipe} from "database/models/Recipe";
import { faker } from "@faker-js/faker/.";
const RecipeCard = ({children}:  { children: JSX.Element }): JSX.Element => {
    return (
        <View style={style.card}>
            { children }
        </View>
    );
}


const style = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 16,
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)"
    },
})
export default RecipeCard;