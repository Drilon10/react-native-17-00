import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>1</View>
      <View style={styles.item2}>2</View>
      <View style={styles.item3}>3</View>
    </View>


  )
}

const styles = StyleSheet.create({
//   container: {
//     borderWidth: 3,
//     borderColor: 'orange'
//   },

//   text: {
//     marginTop: 40,
//     fontSize: 50,
//     backgroundColor: 'darkblue',
//     color: 'white',
//     paddingVertical: 25
//   }

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around', /* start, center, end, space-between, space-around */
        alignItems: 'center',
        height: '100%'
    },
    item1: {
        width: 100,
        height: 50,
        backgroundColor: 'powderblue',
        color: 'white',
        alignSelf: 'end'
    },
    item2: {
        width: 100,
        height: 50,
        backgroundColor: 'skyblue',
        color: 'white',
        alignSelf: 'start'
    },
    item3: {
        width: 100,
        height: 50,
        backgroundColor: 'steelblue',
        color: 'white'
    }
})


export default BoxScreen