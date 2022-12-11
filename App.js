import React, { useContext } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import Context, { NewsContext } from './src/Component/Api/ContextApi';
import InShortTabs from './src/Component/InShortTabs';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });
  const { darkTheme } = useContext(NewsContext);
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? '#282C35' : 'white' }}>
      <InShortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (<Context>
    <App />
  </Context>);
}
