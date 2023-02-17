import React from "react";
import {FlatList, ListRenderItemInfo, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";

import Category from "../../../model/recipes/models/Category";
import CategoryGridTile from "../../../components/dashboard/recipes/CategoryGridTile";
import {CATEGORIES} from "../../../assets/dashboard/recipes/dummy-data";

interface ICategoriesScreen {
    navigation: NavigationProp<any>
}

const CategoriesScreen: React.FC<ICategoriesScreen> = ({navigation}) => {
    /* Functions */
    const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,

            });
        }

        return <CategoryGridTile title={itemData.item.title}
                                 colors={itemData.item.colors}
                                 onPress={pressHandler}
        />;
    }

    /* Render */
    return (
        <View>
            <FlatList data={CATEGORIES}
                      renderItem={renderCategoryItem}
                      keyExtractor={item => item.id}
                      numColumns={2}
            />
        </View>
    );
}

export default CategoriesScreen;
