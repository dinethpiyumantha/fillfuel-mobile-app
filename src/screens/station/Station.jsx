import { Button, Flex, Switch, Text } from '@react-native-material/core'
import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from '../../assets/styles/main'
import FuelAvailablity from '../../components/fuel-avalability/FuelAvailablity'

export default function Station() {
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.stack}>
            <Text variant='h4'>Fuel Station</Text>
            <Text variant='h6'>Kothalawala Fuel Station</Text>
            <Text variant='p'>Kothalawala, Kaduwela</Text>
            <FuelAvailablity />
        </View>
    </SafeAreaView>
  )
}
