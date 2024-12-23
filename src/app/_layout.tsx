import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Arvo-Regular': require('../../assets/fonts/Arvo-Regular.ttf'),
    'Arvo-Bold': require('../../assets/fonts/Arvo-Bold.ttf'),
    'Arvo-Italic': require('../../assets/fonts/Arvo-Italic.ttf'),
    'Arvo-BoldItalic': require('../../assets/fonts/Arvo-BoldItalic.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="(panel)"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}