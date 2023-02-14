import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

const AddNote = () => {
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text>Add new note!</Text>
                <View>
                    <TextInput style={styles.input} />
                </View>
                <Button title="Add note" />
            </View>
        </View>
    );
};

export default AddNote;

const styles = StyleSheet.create({});