import { Dimensions, StyleSheet, Text, View } from 'react-native';
import RecipeCard from '#app/components/recipes/RecipeCard';
import {Recipe} from '#database/models/Recipe.js';
import SwipeableRecipe from '#app/components/recipes/Swipeable';
import { useEffect, useState } from 'react';
import RecipeStackItem from '#app/components/recipes/RecipeStackItem';

import { faker } from '@faker-js/faker';

const mockRecipe: Recipe = {
    id: 1,
    name: "Delicious Butter Chicken.",
    calories: 100,
    description: "test",   
}
const recipeList: Array<Recipe>  = [];

for (let i: number  =0; i < 100; i++) {
    recipeList.push({
        ...mockRecipe,
        name: faker.food.dish(),
    });
}

export default function Recipes() {
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(1);

    const onSwipeLeft = () => {
        setCurrentRecipeIndex(currentRecipeIndex+1);
    }

    const onSwipeRight = () => {
        setCurrentRecipeIndex(currentRecipeIndex+1);
    }
    return (
        <View style={styles.container}>
            <RecipeStackItem  index={1} key={currentRecipeIndex+1}>
                <RecipeCard recipe={recipeList[currentRecipeIndex+1]}/>
            </RecipeStackItem>
            <RecipeStackItem index={0} key={currentRecipeIndex}>
                <SwipeableRecipe
                    onSwipeLeft={onSwipeLeft}
                    onSwipeRight={onSwipeRight}
                >
                    <RecipeCard recipe={recipeList[currentRecipeIndex]}/>
                </SwipeableRecipe>
            </RecipeStackItem>
        </View>
    );
}

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 32;
const CARD_HEIGHT = height
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
    },
});
