import { Button, Stack, Text, TextInput } from '@react-native-material/core'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from '../../assets/styles/main'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Text variant='h5'>Search Fuel Station</Text>
        <Stack style={styles.stack}>
            <Text>By location</Text>
            <TextInput variant='standard' />
            <Button title="Search" />
        </Stack>
    </SafeAreaView>
  )
}
