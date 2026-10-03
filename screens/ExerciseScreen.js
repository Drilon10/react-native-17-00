import { Text, View, StyleSheet } from 'react-native'

const ExcerciseScreen = () => {
    let message = "Hello World";

    message = "Hello from Digital School";
    return(
        <View>
            <Text>{message}</Text>
            <Text>Second Text</Text>
        </View>
        
    )
}

export default ExcerciseScreen;