import { Stack, router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function SingleBlog() {
    const {id,author} = useLocalSearchParams();
    return (
      <>
        <Stack.Screen options={{headerTitle:`Article ${id}`}}/>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>Blog Post Details {id}</Text>
            <Text style={{fontSize:30}}>Written By {author}</Text>
            <Button onPress={()=>router.back()} title="Go Back"/>
        </View>
        </>
    )
      
}
