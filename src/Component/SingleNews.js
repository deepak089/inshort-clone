import { Dimensions, Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from './Api/ContextApi';
import {
  JosefinSans_200ExtraLight_Italic,
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

const windowHeight = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').height;

const SingleNews = ({ item, index }) => {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View style={
      {
        height: windowHeight,
        width: windowWidth,
        // transform:[{scaleY:-1}]
      }
    }>
      <Image
        source={{ uri: item.urlToImage }}
        style={{
          height: windowHeight,
          resizeMode: 'cover',
          width: '49%',
          padding:15,
          borderRadius:10,
        }} />
      <View style={{ ...styles.description, backgroundColor: darkTheme ? '#282C35' : 'white' }}>
        <Text
          style={{ ...styles.titleText, color: darkTheme ? 'white' : 'black' }}>{item.title}</Text>

        <Text
          style={{ ...styles.content, color: darkTheme ? 'white' : 'black' }}>{item.description}</Text>
        <Text
          style={{ color: darkTheme ? 'white' : 'black' }}>Short By:
          <Text>
            {item.author ?? "unknown"}
          </Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: item.urlToImage }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: darkTheme ? 'white' : 'black' }}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{
              fontSize: 17, fontWeight: 'bold',
              color: darkTheme ? 'white' : 'black'
            }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}
export default SingleNews

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    paddingBottom: 20,
    fontFamily: 'Nunito_600SemiBold',

  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
    fontFamily:'JosefinSans_500Medium'
  },
  description: {
    height:windowHeight,
    padding: 15,
    fontFamily: 'Nunito_200ExtraLight',
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#d7be69',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom:32,
    fontFamily:'JosefinSans_500Medium'
  }

})