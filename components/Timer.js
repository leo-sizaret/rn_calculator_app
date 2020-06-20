import React from 'react'
import { Animated, StyleSheet, View, Button, Text } from 'react-native'
import * as Progress from 'react-native-progress';


class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            animatedHeight: new Animated.Value(1),
        }
    }

    startTimer = (duration) => {
        this._animation = Animated.timing(this.state.animatedHeight, {
            duration: duration,
            toValue: 0,
            useNativeDriver: true
        }).start();
    }



    render() {
        const animatedStyle = {
            height: this.state.animatedHeight
        }

        return (

            < View style={styles.MainContainer} >
                <Progress.Bar
                    progress={0.3}
                    width={200}
                    animated={true}
                    color={"black"}
                    unfilledColor={"white"}
                    borderColor={"black"}
                    borderWidth={0} />

                <View style={{ height: 100, width: 70, backgroundColor: "red", transform: [{ translateY: this.state.animatedHeight }] }}></View>

                <Button title="start timer" onPress={this.startTimer} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: "black"

    },
    animatedBox: {
        width: 180,
        height: 180,
        backgroundColor: 'black'
    },
});

export default Timer
