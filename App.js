import { NativeBaseProvider, Box } from "native-base";

import { StyleSheet } from "react-native";
import { HomeScreen } from "./components/Screens/Homescreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
