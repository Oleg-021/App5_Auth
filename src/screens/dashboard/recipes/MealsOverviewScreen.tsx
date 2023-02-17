import React, {useLayoutEffect} from "react";
import {NavigationProp, RouteProp} from "@react-navigation/native";

import {CATEGORIES, MEALS} from "../../../assets/dashboard/recipes/dummy-data";
import MealsList from "../../../components/dashboard/recipes/meal-list/MealsList";

interface IMealsOverviewScreen {
    route: RouteProp<any, any>,
    navigation: NavigationProp<any, any>
}

const MealsOverviewScreen: React.FC<IMealsOverviewScreen> = ({route, navigation}) => {
    const categoryId: string = route.params?.categoryId;
    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.title;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    return (
        <MealsList displayedMeals={displayedMeals}/>
    );
}

export default MealsOverviewScreen;
