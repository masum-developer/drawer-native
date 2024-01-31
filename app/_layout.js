import { Stack, router } from 'expo-router'
import React from 'react'
import { Button } from 'react-native'

export default function _layout() {
    return (
       <Stack screenOptions={{
        headerStyle:{
            backgroundColor:"lightGreen",
            color:"white"
        },
        headerTintColor:'white'
    }}
       >
            <Stack.Screen name="index" options={{
                headerTitle:'Home',
                headerRight:()=><Button onPress={()=>{router.push('contact')}} title="contact"/>
                }}/>
            <Stack.Screen name="about" options={{headerTitle:'About'}}/>
            <Stack.Screen name="blog/index" options={{headerTitle:'Blog'}}/>
            <Stack.Screen name="contact" options={{headerTitle:'Contact', presentation:'modal'}}/>
            <Stack.Screen name="(drawer)" options={{headerShown:false}}/>
       </Stack>
    )
}
