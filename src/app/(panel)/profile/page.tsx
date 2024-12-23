import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '@/constants/colors';
import Button from '@/components/general/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { getAuth, signOut, User } from 'firebase/auth';
import { ProfileModel } from '@/types/types';

export default function Profile() {
  const [userData, setUserData] = useState<User | null>(null);
  const [profileData, setProfileData] = useState<ProfileModel | null>(null);
    const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    let parser: any = '';
    AsyncStorage.getItem('user').then((data) => {
      if (data) {
        parser = JSON.parse(data);
        setUserData(parser);
      }
    });
  }, [userData])

  return (
    <View style={styles.container}>

      <Button
        buttonWidth={300}
        buttonText="Sair"
        buttonTextColor={Colors.white}
        buttonBgColor={Colors.red}
        clickEvent={() => {
          signOut(auth);
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