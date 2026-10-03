import { Text, View, StyleSheet } from "react-native";


const Ch1 = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>This is First Challenge</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9f2c2c'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white"
    }

})


export default Ch1;