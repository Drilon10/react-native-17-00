import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

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
  }
});

export default ButtonScreen;

