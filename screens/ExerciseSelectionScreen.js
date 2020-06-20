import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ExerciseSelectionBoxContainerForNByN from "../components/exercise_selection/ExerciseSelectionBoxContainerForNByN";
import ExerciseSelectionBoxContainerForDifficulties from "../components/exercise_selection/ExerciseSelectionBoxContainerForDifficulties"

class CalculatorScreen extends React.Component {

    render() {

        const multiplicationArray = [
            {
                num_1_digits: 1,
                num_2_digits: 1,
                difficulty: 11,
            },
            {
                num_1_digits: 1,
                num_2_digits: 2,
                difficulty: 12,
            },
            {
                num_1_digits: 2,
                num_2_digits: 2,
                difficulty: 22,
            },
            {
                num_1_digits: 2,
                num_2_digits: 3,
                difficulty: 23,
            },
            {
                num_1_digits: 3,
                num_2_digits: 3,
                difficulty: 33,
            }
        ]

        const percentageArray = [
            {
                difficulty: "Easy",
            },
            {
                difficulty: "Medium",
            },
            {
                difficulty: "Hard",
            }
        ]

        const zeroesMultiplicationArray = [
            {
                difficulty: "Easy",
            },
            {
                difficulty: "Medium",
            },
            {
                difficulty: "Hard",
            }
        ]

        return (
            <ScrollView style={styles.container}>

                {/* Multiplication section */}
                <ExerciseSelectionBoxContainerForNByN
                    list={multiplicationArray}
                    title={"Multiplications"}
                    navigation={this.props.navigation}
                    pageName={"MultiplicationExercise"} />

                {/* Percentage section */}
                <ExerciseSelectionBoxContainerForDifficulties
                    list={percentageArray}
                    title={"Percentages"}
                    navigation={this.props.navigation}
                    pageName={"PercentageExercise"} />

                {/* Larze 0 multiplication section */}
                <ExerciseSelectionBoxContainerForDifficulties
                    list={zeroesMultiplicationArray}
                    title={"Zeros"}
                    navigation={this.props.navigation}
                    pageName={"LargeZeroesExercise"} />

            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

export default CalculatorScreen;
