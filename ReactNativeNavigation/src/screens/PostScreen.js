import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PostScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>PostScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
