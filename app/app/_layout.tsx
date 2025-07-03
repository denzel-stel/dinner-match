import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as React from 'react';
import { router, Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useFonts,Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { RobotoSerif_200ExtraLight, RobotoSerif_400Regular, RobotoSerif_500Medium } from '@expo-google-fonts/roboto-serif';
import { View } from 'react-native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
const App = ():JSX.Element => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    RobotoSerif_400Regular,
    RobotoSerif_500Medium,
    RobotoSerif_200ExtraLight,
  });


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>;
  }
  const style = {
    flex: 1,
    padding: 20,
};
  return (
    <GestureHandlerRootView>
      <View style={style}>
        <Slot></Slot>
      </View>
    </GestureHandlerRootView>
  );
}
export default App;