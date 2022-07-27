import { Listpage } from '../pages/Listpage'
import { Loginpage } from '../pages/Loginpage'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const ShopNavigator = () => {
  return (
 <NavigationContainer initialRouteName="Login">
<Stack.Navigator>
<Stack.Screen name='Login' component={Loginpage} />
<Stack.Screen name='To do list' component={Listpage} />
</Stack.Navigator>
 </NavigationContainer>
  )
}
