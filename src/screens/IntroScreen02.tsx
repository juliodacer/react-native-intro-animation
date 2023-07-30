import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import LoveArt from '../components/artworks/LoveArt'
import { INTRO_SCREEN_01, INTRO_SCREEN_02 } from '../utils/constanst';
import PrimaryButton from '../components/PrimaryButton';
import ScreenIndicator from '../components/ScreenIndicator';
import GiftsArt from '../components/artworks/GiftsArt';

// interface Props {
//   navigation: RootStackScreenProps<"IntroScreen01">
// }

const IntroScreen02 = ({ navigation }: RootStackScreenProps<"IntroScreen02">) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <GiftsArt width={300} height={300} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{
          INTRO_SCREEN_02.title}
        </Text>
        <Text style={styles.description}>
          {INTRO_SCREEN_02.description}
        </Text>
        <ScreenIndicator count={6} activeIndex={0} />
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <PrimaryButton label='Siguiente' onPress={() => navigation.navigate('IntroScreen03')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    padding: 16
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 40, fontWeight: "800", color: '#000' },
  description: { opacity: 0.5, color: '#000', marginTop: 16, fontSize: 16 }
})

export default IntroScreen02