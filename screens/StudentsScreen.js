import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StudentDetails from '../components/StudentDetails'

const StudentsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Students Screen</Text>

            <StudentDetails 
                name="Andrra" 
                description="Frontend Developer - React Native"
                image={require("../assets/student1.webp")}
            >    
            </StudentDetails>
            <StudentDetails 
                name="Erina" 
                description="Frontend Developer - Javascript Developer"
                image={require("../assets/student1.webp")}
            >
            </StudentDetails>
            <StudentDetails 
                name="Amar" 
                description="Backend Developer - PHP & mySQL"
                image={require("../assets/student1.webp")}
            >
            </StudentDetails>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fb'
  },

  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  }
})

export default StudentsScreen;