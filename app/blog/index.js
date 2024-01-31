import { Link, router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Blog() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>Blog Page</Text>
            <Button onPress={()=>router.push('/blog/1')} title="Go to Blog 1"/>
            <Button onPress={()=>router.push('/blog/2')} title="Go to Blog 2"/>
            <Button onPress={()=>router.push('/blog/3?author=masum')} title="Go to Blog 3"/>
            <Link href={{
                pathname:'blog/4',
                params:{ author:'sajib'}
            }}>
                <Text style={{fontSize:18}}>Go to Blog 4</Text>
            </Link>
            <Button onPress={()=>router.back()} title="Go Back"/>
        </View>
    )
}
