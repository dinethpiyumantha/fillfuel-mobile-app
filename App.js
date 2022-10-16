import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/Home';
import Login from './src/screens/login/Login';
import Pump from './src/screens/pump/Pump';
import SignUp from './src/screens/sign-up/SignUp';
import StationList from './src/screens/station-list/StationList';
import Station from './src/screens/station/Station';

export default function App() {
  return (
    <Pump />
  );
}

