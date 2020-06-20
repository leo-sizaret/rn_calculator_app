import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Exercises")}>
                    <View style={styles.startButton}>
                        <Text style={styles.startButtonText}>Start</Text>
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    startButton: {
        width: 150,
        backgroundColor: "black",
        padding: 15,
    },
    startButtonText: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        fontFamily: "NotoSerif-Regular"
    },
});

export default HomeScreen;
