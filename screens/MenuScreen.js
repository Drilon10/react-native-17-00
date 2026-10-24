import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

const MenuScreen = (props) => {
    return(
        <View>
            <Text style={styles.text}>Menu Screen</Text>
            <Button
                title='Go to List Screen'
                onPress={() => props.navigation.navigate('List')}
            ></Button>

            <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => props.navigation.navigate('Button')}
            >
                <Text style={styles.btnTxt}>Go to Buttons</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => props.navigation.navigate('Students')}
            >
                <Text style={styles.btnTxt}>Go to Students</Text>
            </TouchableOpacity>



        </View>
    )
}


const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20
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
})

export default MenuScreen;
