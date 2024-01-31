import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function About() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>About Page</Text>
            <Button onPress={()=>router.back()} title="Go Back"/>
        </View>
    )
}
