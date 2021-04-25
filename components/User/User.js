import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User(props) {
    return (
        <View style={styles.container}>
            <Text>{props.user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '200px',
        marginTop:'5px',
        marginLeft: '45%',
        borderWidth: 3,
        borderColor: 'purple'
    }
})
