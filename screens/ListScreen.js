import { Text, StyleSheet, View, FlatList } from 'react-native'

const students = [
    {
        id: '1',
        name: 'Star',
        lastname: 'Iljazi',
        age: 17
    },
    {
        id: '2',
        name: 'John',
        lastname: 'Doe',
        age: 16
    },
    {
        id: '3',
        name: 'Jane',
        lastname: 'Doe',
        age: 17
    }
]

const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Students</Text>
            <FlatList
                data={students}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <Text style={styles.student}>
                            {item.name} {item.lastname} - {item.age}
                        </Text>
                    )
                }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },

    student: {
        fontSize: 20,
        marginBottom: 10
    }
})


export default ListScreen;