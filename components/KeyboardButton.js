import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class KeyboardButton extends React.Component {
  // Declare default props
  static defaultProps = {
    onPress: function () { },
    title: "",
    color: "white",
    backgroundColor: "black",
  };

  render() {
    var bc = this.props.backgroundColor;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.container, { backgroundColor: bc }]}
      >
        <Text style={[styles.textButton, { color: this.props.color }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", // Center along Y axis
    alignItems: "center", // Center along X axis
    height: 50,
    width: 50,
  },
  textButton: {
    fontSize: 27,
  },
});

export default KeyboardButton;
