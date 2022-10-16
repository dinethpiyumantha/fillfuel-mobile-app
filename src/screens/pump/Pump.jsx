import { SafeAreaView } from 'react-native'
import { Button, Stack, Text } from '@react-native-material/core'
import { styles } from '../../assets/styles/main'
import VehicleCount from '../../components/vehicle-count/VehicleCount'

export default function Pump() {
  return (
    <SafeAreaView style={styles.container}>
        <Stack style={styles.stack}>
            <Text variant='h5'>Kothalawala Fuel Station</Text>
            <Text style={[styles.mt2]} variant='h4'>Available</Text>
            <Text variant='p'>Status</Text>
            <Text style={[styles.mt2]} variant='h4'>10 Hrs 30 Mins</Text>
            <Text variant='p'>How long people waiting</Text>
            <Text style={[styles.mt2]} variant='h4'>100 People</Text>
            <Text variant='p'>People in queue</Text>
            <VehicleCount />
            <Button style={[styles.my3]} title="Exit Before Pump Fuel" />
            <Button style={[styles.my3]} title="Exit After Pump Fuel" />
        </Stack>
    </SafeAreaView>
  )
}
