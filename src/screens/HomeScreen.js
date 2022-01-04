import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {

  const goToSettings = () => {
    navigation.navigate('Settings');
  }

  return (
    <View>
      <Text>We are in the Home Screen</Text>
      <Text>We are in the Home Screen</Text>
      <Text>We are in the Home Screen</Text>
      <Text>We are in the Home Screen</Text>
      <Text>We are in the Home Screen</Text>
      <Text>We are in the Home Screen</Text>
      <Button title='Settings' onPress={goToSettings} />
    </View>
  )
}
