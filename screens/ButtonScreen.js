import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonScreen = () => {
    const handlePress = () => {
        console.log('Button Clicked');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Button Screen</Text>

            <Button
                title="Click Me"
                color='darkblue'
                onPress={handlePress}
            ></Button>

            <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => console.log("Touch Element Clicked")}
            >
                <Text style={styles.btnTxt}>Click Touchable Element</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20
  },
  touchBtn: {
    backgroundColor: "purple",
    marginVertical: 15,
    paddingVertical: 20,
    borderRadius: 6,
    marginHorizontal: 20
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default ButtonScreen;

