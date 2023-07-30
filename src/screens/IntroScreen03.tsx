import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import LoveArt from '../components/artworks/LoveArt'
import { INTRO_SCREEN_01, INTRO_SCREEN_03 } from '../utils/constanst';
import PrimaryButton from '../components/PrimaryButton';
import ScreenIndicator from '../components/ScreenIndicator';
import SelectProductArt from '../components/artworks/SelectProductArt';
import AntDesign from 'react-native-vector-icons/AntDesign';

// interface Props {
//   navigation: RootStackScreenProps<"IntroScreen01">
// }

const IntroScreen03 = ({ navigation }: RootStackScreenProps<"IntroScreen03">) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.arrowLeft}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <SelectProductArt width={300} height={300} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{
          INTRO_SCREEN_03.title}
        </Text>
        <Text style={styles.description}>
          {INTRO_SCREEN_03.description}
        </Text>
        <ScreenIndicator count={6} activeIndex={2} />
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <PrimaryButton label='Siguiente' onPress={() => navigation.navigate('IntroScreen04')} />
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
    padding: 24
  },
  arrowLeft: {
    paddingHorizontal: 24,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 40, fontWeight: "800", color: '#000' },
  description: { opacity: 0.5, color: '#000', marginTop: 16, fontSize: 16 }
})

export default IntroScreen03