import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Stack, TextInput, Button, Text } from "@react-native-material/core";
import { styles } from '../../assets/styles/main';

/**
 * @author Ekanayaka GMDP -IT19955650
 * Login Screen
 */
export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
        <Stack spacing={30} style={styles.stack}>
            <Text variant="h5">Fill Fuel</Text>
            <TextInput label="Username" variant="standard" />
            <TextInput label="Password" variant="standard" />
            <Button title="Sign In" />
        </Stack>
    </SafeAreaView>
  )
}