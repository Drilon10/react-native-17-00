import { View, Text, StyleSheet, Image } from 'react-native';

const StudentDetails = ({ name, description, image }) => {
    return(
        <View style={styles.card}>
            <Image source={image} style={styles.image}></Image>
            <View style={styles.info}>

                <Text style={styles.name}>Name: {name}</Text>
                <Text style={styles.description}>Position: {description}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: 82,
    height: 82,
    borderRadius: 12
  },

  info: {
    flex: 1,
    marginLeft: 14
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    color: '#475569'
  }
})

export default StudentDetails;