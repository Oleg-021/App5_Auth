import React from "react";
import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";

import MealItem from "./MealItem";
import Meal from "../../../../model/recipes/models/Meal";

interface IMealsList {
    displayedMeals: Meal[]
}

const MealsList: React.FC<IMealsList> = ({displayedMeals}) => {
    const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        };

        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals}
                      renderItem={renderMealItem}
                      keyExtractor={meal => meal.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsList;
