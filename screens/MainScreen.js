import { Text, View, StyleSheet } from "react-native";


const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>This is Main Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})


export default MainScreen;