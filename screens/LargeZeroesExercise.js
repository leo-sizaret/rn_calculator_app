import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

import KeyboardButton from "../components/KeyboardButton";
import Highscore from "../components/Highscore";

class LargeZeroesExercise extends React.Component {

    constructor() {
        super()
        this.state = {
            resultText: "", // Result that's displayed
            resultNumber: 0, // Result that's confirmed ==> DO I REALLY NEED THIS?
            n_1: null, // First number
            n_2: null, // Second number
            score: 0, // Highscore
        };
    };

    // When a digit is pressed...
    onDigitPress = (digit) => {
        this.setState(
            prevState => ({
                resultText: prevState.resultText + digit,
                resultNumber: Number(prevState.resultText + digit)
            }), () => {
                this.verifyAnswer()
            }
        );
    }

    onDecimalPress = () => {
        if (Number.isInteger(this.state.resultNumber)) {
            this.setState(
                prevState => ({
                    resultText: prevState.resultText + ".",
                    resultNumber: Number(prevState.resultText + ".")
                })
            )
        }
    }

    // When the Clear button is pressed ("C")...
    onClearPress = () => {
        this.setState({
            resultText: "",
            resultNumber: 0
        })
    };

    // When the Return button is pressed...
    onReturnPress = () => {
        if (this.state.resultText.length > 0) {
            this.setState(prevState => ({ resultText: prevState.resultText.substring(0, prevState.resultText.length - 1) }))
            this.setState({ resultNumber: parseInt(this.state.resultText, 10) })
        }
    };

    // When the reset button is pressed...
    onResetPress = () => {
        this.setState({
            n_1: null,
            n_2: null,
            resultText: "",
            resultNumber: 0,
            score: 0
        })
    }

    // When the start/new problem button is pressed...
    onNewProblemPress = () => {
        this.newProblem()
        if (this.state.n_1 != null) {
            this.setState(prevState => ({ score: prevState.score - 1 }))
        }
    }

    // Helper function for the main newProblem() function...
    generateLargeNumber = (max_int, min_int, scaling_factor, max_pow) => {
        let x =
            Math.floor(Math.random() * (max_int - min_int) + min_int) *
            scaling_factor;
        let pow = Math.floor(Math.random() * max_pow);
        return x * Math.pow(10, pow);
    };

    // Generate a new problem based on the difficulty prop...
    newProblem = () => {
        switch (this.props.route.params.difficulty) {
            case "Easy":
                let n_1 = this.generateLargeNumber(9, 1, 10, 2);
                let n_2 = this.generateLargeNumber(9, 1, 10, 2);
                this.setState({
                    n_1: n_1,
                    n_2: n_2
                })
                return;
            // Does this need a return statement?

            case "Medium":
                n_1 = this.generateLargeNumber(99, 10, 100, 2);
                n_2 = this.generateLargeNumber(99, 10, 100, 2);
                this.setState({
                    n_1: n_1,
                    n_2: n_2
                })
                return;

            case "Hard":
                n_1 = this.generateLargeNumber(999, 100, 1000, 1);
                n_2 = this.generateLargeNumber(999, 100, 1000, 1);
                this.setState({
                    n_1: n_1,
                    n_2: n_2
                })
                return;

            default:
                return console.log("Enter a difficulty");
        }
    };

    // When the user enters an answer...
    verifyAnswer = () => {
        let correctAnswer = this.state.n_1 * this.state.n_2
        if (this.state.n_1 != null) {
            if (this.state.resultText.length >= correctAnswer.toString().length) {
                if (this.state.resultNumber == correctAnswer) {
                    this.newProblem()
                    this.setState(prevState => ({
                        resultText: "",
                        resultNumber: 0,
                        score: prevState.score + 1
                    }))
                } else {
                    this.newProblem()
                    this.setState(prevState => ({
                        resultText: "",
                        resultNumber: 0,
                        score: prevState.score - 1
                    }))
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Displays the problem */}
                <View style={styles.textCalculationContainer}>
                    <Text style={styles.textCalculation}>{this.state.n_1 != null ? this.state.n_1 + " x " + this.state.n_2 : null}</Text>
                </View>

                {/* Displays the user input */}
                <View style={{ alignItems: "center" }}>
                    <View style={styles.textAnswerContainer}>
                        <Text style={styles.textAnswer}>{this.state.resultText}</Text>
                    </View>
                </View>

                {/* Displays the keyboard */}
                <View style={styles.keyboardContainer}>
                    <View style={styles.rowButton}>
                        <KeyboardButton title="1" onPress={() => { this.onDigitPress("1"); }} />
                        <KeyboardButton title="2" onPress={() => { this.onDigitPress("2"); }} />
                        <KeyboardButton title="3" onPress={() => { this.onDigitPress("3"); }} />
                    </View>

                    <View style={styles.rowButton}>
                        <KeyboardButton title="4" onPress={() => { this.onDigitPress("4"); }} />
                        <KeyboardButton title="5" onPress={() => { this.onDigitPress("5"); }} />
                        <KeyboardButton title="6" onPress={() => { this.onDigitPress("6"); }} />
                    </View>

                    <View style={styles.rowButton}>
                        <KeyboardButton title="7" onPress={() => { this.onDigitPress("7"); }} />
                        <KeyboardButton title="8" onPress={() => { this.onDigitPress("8"); }} />
                        <KeyboardButton title="9" onPress={() => { this.onDigitPress("9"); }} />
                    </View>

                    <View style={styles.rowButton}>
                        <KeyboardButton title="." onPress={() => { this.onDecimalPress(); }} />
                        <KeyboardButton title="0" onPress={() => { this.onDigitPress("0"); }} />
                        <Ionicons name="ios-return-left" size={65} color="white" onPress={() => this.onReturnPress()} style={styles.returnButton} />
                    </View>
                </View>

                {/* Displays the "New Problem" button */}
                <View style={styles.containerNewProblem}>
                    <FontAwesome5 name="dot-circle" size={40} color="white" onPress={() => this.onNewProblemPress()} />

                    {/* Highscore */}
                    <Highscore score={this.state.score} />

                    {/* Reset button */}
                    <FontAwesome name="repeat" size={40} color="white" onPress={() => this.onResetPress()} />

                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        // backgroundColor: "blue",
        justifyContent: "flex-end"
    },
    textCalculationContainer: {
        // backgroundColor: "yellow",
    },
    textCalculation: {
        textAlign: "center",
        fontSize: 60,
        color: "white",
    },
    textAnswerContainer: { // What if you didn't have this component?
        marginVertical: "3%",
        width: "35%",
    },
    textAnswer: {
        textAlign: "center",
        fontSize: 30,
        color: "white",
    },
    keyboardContainer: {
    },
    rowButton: {
        paddingVertical: "1%", // Add space between the buttons
        flexDirection: "row", // Display as a row
        justifyContent: "space-evenly", // Evenly distribute buttons along row
        backgroundColor: "black",
        borderTopWidth: 3,
        borderTopColor: "white",
    },
    containerNewProblem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "10%",
    },
    returnButton: {
        justifyContent: "center", // Center along Y axis
        alignItems: "center", // Center along X axis
    },
});

export default LargeZeroesExercise;
