import AppLoading from 'expo-app-loading';
import { Listpage } from './pages/Listpage';
import { Loginpage } from './pages/Loginpage';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({ 
    MontBlack: require('./assets/fonts/Montserrat-Black.ttf'), 
    MontBold: require('./assets/fonts/Montserrat-Bold.ttf'), 
    Montegular: require('./assets/fonts/Montserrat-Medium.ttf'), 
    MontMedium: require('./assets/fonts/Montserrat-Regular.ttf'), 
    MontThin: require('./assets/fonts/Montserrat-Thin.ttf')})


  if(!loaded) return <AppLoading />

  return (
    <View>
      <Loginpage></Loginpage>
    </View>
  );
}
