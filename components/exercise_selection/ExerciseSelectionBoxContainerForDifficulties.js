import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ExerciseSelectionBox from "./ExerciseSelectionBox";

// Gets a title prop
// gets a list prop (corresponds to difficulty)

class ExerciseSelectionBoxContainerForDifficulties extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                {/* Title */}
                <Text style={styles.title}>{this.props.title}</Text>

                {/* Flatlist --> renders the ExerciseSelectionBox.js component */}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.difficulty}
                    data={this.props.list}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.pageName, {
                            name: item.difficulty,
                            difficulty: item.difficulty
                        })}>
                            <ExerciseSelectionBox
                                num_1_digits={item.num_1_digits}
                                num_2_digits={item.num_2_digits}
                                difficulty={item.difficulty} />
                        </TouchableOpacity>
                    )} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginLeft: 20,
        paddingBottom: 10,

        borderBottomColor: "grey",
        borderBottomWidth: 1,
    },
    title: {
        // fontWeight: "bold",
        fontSize: 22,
        fontFamily: "NotoSerif-Regular"
    },
});

export default ExerciseSelectionBoxContainerForDifficulties;
