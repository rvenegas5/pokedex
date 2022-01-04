import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SettingsScreen({ navigation }) {

  const goToScreen = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>This is the Settings Screen</Text>
      <Text>This is the Settings Screen</Text>
      <Text>This is the Settings Screen</Text>
      <Text>This is the Settings Screen</Text>
      <Text>This is the Settings Screen</Text>
      <Text>This is the Settings Screen</Text>
      <Text>This is the Settings Screen</Text>
      <Button title='Home' onPress={()=>goToScreen("Home")} />
    </View>
  )
}
