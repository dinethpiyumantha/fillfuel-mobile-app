import { Button, Stack, Text, TextInput } from "@react-native-material/core";
import { SafeAreaView, View } from "react-native";
import { styles } from "../../assets/styles/main";

export default function SignUp() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.stack}>
                <Text variant="h4">Sign Up</Text>
                <Text>Create a customer account</Text>
                <Stack spacing={20} style={styles.mt3}>
                    <TextInput label="Username" variant="standard" />
                    <TextInput label="Password" variant="standard" />
                    <TextInput label="Name" variant="standard" />
                    <TextInput label="NIC" variant="standard" />
                    <TextInput label="Phone" variant="standard" />
                    <Button title="Create Account" />
                </Stack>
            </View>
        </SafeAreaView>
    )
}
