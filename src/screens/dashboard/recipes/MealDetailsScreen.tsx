import React, {useLayoutEffect} from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {NavigationProp, RouteProp} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";

import {MEALS} from "../../../assets/dashboard/recipes/dummy-data";
import Meal from "../../../models/recipes/models/Meal";
import {addFavorite, removeFavorites} from "../../../store/recipes/favorites";
import IconButton from "../../../components/dashboard/recipes/IconButton";
import MealDetails from "../../../components/dashboard/recipes/MealDetails";
import Subtitle from "../../../components/dashboard/recipes/meal-detail/Subtitle";
import List from "../../../components/dashboard/recipes/meal-detail/List";
import {Colors} from "../../../constants/Colors";

interface IMealDetailsScreen {
    route: RouteProp<any, any>,
    navigation: NavigationProp<any, any>
}

const MealDetailsScreen: React.FC<IMealDetailsScreen> = ({route, navigation}) => {
    // State
    const favoriteMeals: string[] = useSelector((state: any) => state.favoriteMeals.ids);

    // Params
    const favoriteMealsDispatch = useDispatch();

    const mealId: string = route.params?.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId) || {} as Meal;

    const mealIsFavorite = favoriteMeals.includes(mealId);

    // Functions
    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite)
            favoriteMealsDispatch(removeFavorites({id: mealId}));
        else
            favoriteMealsDispatch(addFavorite({id: mealId}));
    }

    // Effects
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? "★" : "☆"} onPress={changeFavoriteStatusHandler}/>
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    // Render
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            </View>

            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails duration={selectedMeal.duration}
                         complexity={selectedMeal.complexity}
                         affordability={selectedMeal.affordability}
                         textStyle={styles.detailText}
            />

            <View style={styles.alignListStyle}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: Colors.gray500,
        borderRadius: 10,
        shadowColor: Colors.gray700,
        shadowOpacity: 0.55,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 7,
        elevation: 7,
        padding: 0,
        margin: 20,
    },
    image: {
        flex:1,
        maxWidth: "100%",
        height: 300,
        borderRadius: 10
    },
    title: {
        textAlign: "center",
        color: Colors.yellow200,
        fontSize: 24,
        fontWeight: "bold",
        backgroundColor: Colors.gray500,
        borderRadius: 5,
        margin: 16
    },
    detailText: {
        color: Colors.gray500,
        fontWeight: "bold"
    },
    alignListStyle: {
        alignItems: "center"
    },
    listContainer: {
        width: "90%",
        marginBottom: 20
    }
});

export default MealDetailsScreen;
