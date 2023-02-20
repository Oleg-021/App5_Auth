import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Colors} from "../../../../constants/Colors";
import MealDetails from "../MealDetails";

interface IMealItem {
    id: string,
    title: string,
    imageUrl: string,
    duration: string,
    complexity: string,
    affordability: string
}

const MealItem: React.FC<IMealItem> = ({id, title, imageUrl, duration, complexity, affordability}) => {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        // @ts-ignore
        navigation.navigate("MealDetail", {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable style={({pressed}) => [pressed ? styles.buttonPressed : null]}
                       android_ripple={{color: Colors.gray200}}
                       onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <MealDetails duration={duration}
                                 complexity={complexity}
                                 affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        backgroundColor: Colors.white,
        margin: 16,
        borderRadius: 10,
        elevation: 8,
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        textAlign: "center",
        color: Colors.black,
        fontSize: 18,
        fontWeight: "bold",
        margin: 8
    }
});

export default MealItem;
