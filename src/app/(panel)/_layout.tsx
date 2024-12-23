import React from 'react'
import { Slot, Tabs } from 'expo-router'

export default function ProfileLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home/page"
                options={{ headerShown: false, title: 'Home' }}
            />
            <Tabs.Screen
                name="profile/page"
                options={{ headerShown: false, title: 'Perfil' }}
            />
        </Tabs>
    )
}