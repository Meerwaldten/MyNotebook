import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {ScreenType} from "../constants/constants";

const Homescreen = ( {onExit } ) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => onExit(ScreenType.addNote) }>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>Add new note.</Text>
                    <Icon style={styles.icon} name="arrow-forward-outline" />
                </View>
            </Pressable>
            <Pressable onPress={() => onExit(ScreenType.allNotes)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>View all notes.</Text>
                    <Icon style={styles.icon} name="arrow-forward-outline" />
                </View>
            </Pressable>
        </View>
    );
};

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40,
    },
    itemButton: {
        width: Dimensions.get("window").width - 100,
        height: "40%",
        marginVertical: 30,
        backgroundColor: "#f5f5f6",
        justifyContent:  "center",
        alignItems: "center",
        elevation: 10,
        shadowOffset: { width: 2, height: 10 },
            shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    icon: {
        fontSize: 25,
        paddingTop: 20,

    }
});