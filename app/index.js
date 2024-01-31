import { Link } from 'expo-router'
import React from 'react'
import {Button, Text, View } from 'react-native'

export default function Page() {
    return (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30}}>Home</Text>
            <Link href="/about">
                <Text style={{color:'green'}}>Go To About Page</Text>
            </Link>
            <Link href="/blog" asChild>
                <Text style={{margin:20}}>Go To Blog Page</Text>
                
            </Link>
            <Link href="/contact" asChild>
                <Button title="Go To Contact Page"/>
            </Link>
            <Link href={'/feed'} asChild>
                <Button title="Go To Tabs"/>
            </Link>
        </View>
    )
}
