import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/colors'
import Button from '@/components/general/button'
import { } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Profile() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    console.log(AsyncStorage.getItem('user'));
  })

  return (
    <View style={styles.container}>
      <Text></Text>
      <Button
        buttonWidth={300}
        buttonText="Sair"
        buttonTextColor={Colors.white}
        buttonBgColor={Colors.red}
        clickEvent={() => {
          router.replace('/');
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    textAlign: 'center'
  }
})