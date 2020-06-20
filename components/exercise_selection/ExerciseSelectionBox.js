import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'

class ExerciseSelectionBox extends React.Component {

    render() {

        const difficulty = this.props.difficulty == null ? this.props.num_1_digits + " by " + this.props.num_2_digits : this.props.difficulty

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{difficulty}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 140,
        backgroundColor: "white",
        marginVertical: 15,
        marginRight: 20,
        borderWidth: 1,
        borderColor: "black",
    },
    text: {
        color: "black",
        fontSize: 20,
    }
})

export default ExerciseSelectionBox