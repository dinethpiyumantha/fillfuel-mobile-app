import { Flex, Switch, Text } from '@react-native-material/core'
import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from '../../assets/styles/main';

export default function FuelAvailablity() {
    const [checked, setChecked] = useState(true);
    const [avalability, setAvalability] = useState("Fuel Available")

    const onValueChange = () => {
        setChecked(!checked);
        setAvalability((avalability == "Fuel Available") ? "Fuel Unavailable" : "Fuel Available");
    };

    return (
        <View>
            <Text variant='h5' style={styles.mt3}>{avalability}</Text>
            <Flex direction='row'>
                <Text variant='h6' style={{ width: '50%' }}>Diesel</Text>
                <Switch value={checked} onValueChange={onValueChange} />
            </Flex>
        </View>
    )
}
