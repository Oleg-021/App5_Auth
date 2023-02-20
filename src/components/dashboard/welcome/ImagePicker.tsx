import React, {useEffect, useState} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {launchCamera} from "react-native-image-picker";

import {Colors} from "../../../constants/Colors";

interface IImagePicker {
    onTakeImage: (imageUri: string) => void
}

const ImagePicker: React.FC<IImagePicker> = ({onTakeImage}) => {
    // State
    const [pickedImageUri, setPickedImageUri] = useState<string>();

    // Functions
    const takeImageHandler = async () => {
        const image = await launchCamera({
            mediaType: "photo",
            quality: 1
        });
        if (image.assets)
            setPickedImageUri(image.assets[0].uri);
    }

    // Effects
    useEffect(() => {
        if (pickedImageUri)
            onTakeImage(pickedImageUri);
    }, [pickedImageUri, onTakeImage])

    // Render
    let imagePreview = <Text>Make your photo</Text>;

    if (pickedImageUri)
        imagePreview = <Image style={styles.image} source={{uri: pickedImageUri}}/>;

    return (
        <View>
            <Pressable onPress={takeImageHandler}>
                <View style={styles.shadowedContainer}>
                    <View style={styles.imagePreview}>
                        {imagePreview}
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePreview: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.yellow200,
        borderRadius: 100,
        width: 200,
        height: 200,
        overflow: "hidden"
    },
    image: {
        width: 200,
        height: 200
    },
    textPreview: {
        color: Colors.gray500,
        fontSize: 17,
        fontWeight: "bold"
    },
    shadowedContainer: {
        borderRadius: 100,
        shadowColor: Colors.gray500,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 4,
        elevation: 3
    }
});

export default ImagePicker;
