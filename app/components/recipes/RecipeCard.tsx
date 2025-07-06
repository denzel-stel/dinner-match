import colors from "@/assets/styles/colors";
import styles from "@/assets/styles/typography";
import typography from "@/assets/styles/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { isTypedArray } from "util/types";
import { Recipe } from "database/models/Recipe";
import { faker } from "@faker-js/faker/.";
import typographyStyle from '@/assets/styles/typography';
import Card from "../Card";
import LikedBy from "./LikedBy";
const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <View>
      <View style={style.card}>
        <Image
          style={style.thumbnail}
          source={{
            uri: "https://picsum.photos/200/300",
          }}
        ></Image>
        <View style={style.container}>
          <Text style={{...typographyStyle.h3}}>Butter chicken</Text>
          <View style={{flexDirection: "row", gap: 8,}}>
            <Text style={typographyStyle.label}>15 min</Text>
            <Text style={typographyStyle.label}>3 euro</Text>
            <Text style={typographyStyle.label}>432 kcal</Text>
          </View>
          <View style={{flexDirection: "row", gap: 8}}>
            <LikedBy session={null}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 24,
    boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)",
  },
  thumbnail: {
    aspectRatio: "1/1",
    width: "100%",
    backgroundColor: colors.tintColor,
    borderRadius: 16,
  },
  container: {
    padding: 8,
  }
});

export default RecipeCard;
