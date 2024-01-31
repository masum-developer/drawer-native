import React from 'react'


import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const CustomDrawerContent =(props)=>{
    return (
        <DrawerContentScrollView {...props} screenOptions={{headerShown:false}}>
        <DrawerItem icon={({color,size})=>(<Feather name="list" size={24} color={color} />)} label={'Feed'} onPress={()=>{router.push('/(drawer)/(tabs)/feed')}}/>
        <DrawerItem icon={({color,size})=>(<AntDesign name="user" size={24} color={color} />)} label={'Profile'} onPress={()=>{router.push('/(drawer)/(tabs)/profile')}}/>
    </DrawerContentScrollView>
    )
 
}

export default function Layout() {
    return (
        <Drawer drawerContent={(props)=><CustomDrawerContent{...props}/>}/>
    )
}
