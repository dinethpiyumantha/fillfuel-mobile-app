import { Stack, Text } from '@react-native-material/core'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from '../../assets/styles/main'
import StationCard from '../../components/station-card/StationCard'

export default function StationList() {
  return (
    <SafeAreaView style={styles.container}>
        <Text variant='h4'>Fuel Stations</Text>
        <Text variant='p'>Nearest to Kaduwela</Text>
        <Stack style={[styles.stack]}>
            <StationCard />
            <StationCard />
            <StationCard />
        </Stack>
    </SafeAreaView>
  )
}
