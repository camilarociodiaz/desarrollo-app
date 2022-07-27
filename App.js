import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { Loginpage } from './pages/Loginpage';
import { ShopNavigator } from './navigation/ShopNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    MontBlack: require('./assets/fonts/Montserrat-Black.ttf'),
    MontBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    Montegular: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontMedium: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontThin: require('./assets/fonts/Montserrat-Thin.ttf')
  })


  if (!loaded) return <AppLoading />


  return (

    <ShopNavigator />

  );
}
