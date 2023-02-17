import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../../../util/constants/Colors";

interface IList {
    data: []
}

const List: React.FC<IList> = ({data}) => {
    return <>
        {data.map(item => (
            <View style={styles.listItem} key={item}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        ))}
    </>
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: Colors.gray500
    },
    itemText: {
        textAlign: "center",
        color: Colors.yellow500
    }
});

export default List;
