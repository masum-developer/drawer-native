import { Tabs } from 'expo-router'
import React from 'react'
import { Feather, } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function _layout() {
    return (
        <Tabs>
            <Tabs.Screen
             name="feed/index"
             options={{
                tabBarIcon:({color})=>(
                    <Feather name="list" size={24} color={color} />
                ),
                tabBarLabel:"Feed",
                headerTitle:"Feed",
             }}
             />

              <Tabs.Screen
             name="profile"
             options={{
                tabBarIcon:({color})=>(
                    <AntDesign name="user" size={24} color={color} />
                ),
                tabBarLabel:"Profile",
                headerTitle:"Profile"

             }}
             />
        </Tabs>
    )
}
