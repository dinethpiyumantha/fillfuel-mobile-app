import { Box, Button, Flex, Text } from '@react-native-material/core'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../assets/styles/main'

export default function StationCard() {
    return (
        <Flex direction='column' style={styles.mt3}>
            <Text variant='h5'>Kothalawala Fuel Station</Text>
            <Text variant='h6'>Kothalawala, Kaduwela</Text>
            <Flex direction='row'>
                <Box style={{width: '30%'}}>
                    <Text>Ceypetco</Text>
                </Box>
                <Box style={{width: '45%'}}>
                    <Text>Fuel Available</Text>
                </Box>
                <Button style={{width: '25%'}} title='Join' />
            </Flex>
        </Flex>
    )
}
