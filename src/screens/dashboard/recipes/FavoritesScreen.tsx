import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

import {MEALS} from "../../../assets/dashboard/recipes/dummy-data";
import MealsList from "../../../components/dashboard/recipes/meal-list/MealsList";
import {Colors} from "../../../util/constants/Colors";

interface IFavoritesScreen {
}

const FavoritesScreen: React.FC<IFavoritesScreen> = () => {
    const favoriteMealsIds: string[] = useSelector((state: any) => state.favoriteMeals.ids);

    // Render
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    if (favoriteMeals.length === 0)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    else
        return <MealsList displayedMeals={favoriteMeals}/>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: Colors.gray500,
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default FavoritesScreen;
