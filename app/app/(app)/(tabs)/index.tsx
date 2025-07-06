import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import RecipeCard from "@/components/recipes/RecipeCard";
import { Recipe } from "database/models/Recipe.js";
import SwipeableRecipe from "@/components/recipes/Swipeable";
import { useEffect, useState } from "react";
import RecipeStackItem from "@/components/recipes/RecipeStackItem";
import { faker } from "@faker-js/faker";
import SessionHeader from "@/components/recipes/SessionHeader";
import ColorScheme from "@/constants/ColorScheme";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Icon from "react-native-vector-icons/FontAwesome";
import buttonStyles from "@/assets/styles/buttons";

const mockRecipe: Recipe = {
  id: 1,
  name: "Delicious Butter Chicken.",
  calories: 100,
  description: "test",
};
const recipeList: Array<Recipe> = [];

for (let i: number = 0; i < 100; i++) {
  recipeList.push({
    ...mockRecipe,
    name: faker.food.dish(),
  });
}

export default function Recipes() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(1);

  const onSwipeLeft = () => {
    setCurrentRecipeIndex(currentRecipeIndex + 1);
  };

  const onSwipeRight = () => {
    setCurrentRecipeIndex(currentRecipeIndex + 1);
  };
  return (
    <View>
      <SessionHeader />
      <Container>
        <RecipeCard recipe={recipeList[0]}>

        </RecipeCard>
      </Container>

      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Pressable
          style={{
            ...buttonStyles.button,
            ...buttonStyles.dangerButton,
          }}
        >
          <Icon name="thumbs-down" color="white" size={30}></Icon>
        </Pressable>
        <Pressable
          style={{
            ...buttonStyles.button,
            ...buttonStyles.dangerButton,
          }}
        >
          <Icon name="thumbs-down" color="white" size={30}></Icon>
        </Pressable>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 32;
const CARD_HEIGHT = height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
});
