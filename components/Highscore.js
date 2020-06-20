import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Highscore = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.score != 0 ? props.score : ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        borderBottomWidth: 3,
        borderColor: "white",
        paddingVertical: "3%",


    },
    text: {
        color: "white",
        fontSize: 20,
    }
})

export default Highscore