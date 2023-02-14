import {Platform, StyleSheet, Text, View} from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.headercontainer}>
            <Text style={styles.headertile}>Your notebook</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headercontainer: {
        width: "100%",
        height: "15%",
        backgroundColor: Platform.OS==="android" ?"purple":"white",
        paddingTop: 20
    },
    headertile: {
        color: Platform.OS==="android" ?"white":"purple",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
        marginTop: 10
    }
});