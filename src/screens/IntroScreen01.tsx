import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import LoveArt from '../components/artworks/LoveArt'
import { INTRO_SCREEN_01 } from '../utils/constanst';
import PrimaryButton from '../components/PrimaryButton';
import ScreenIndicator from '../components/ScreenIndicator';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const IntroScreen01 = ({ navigation }: RootStackScreenProps<"IntroScreen01">) => {
  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeInUp.duration(1000).springify()} style={styles.image}
        exiting={FadeInUp.duration(1000).springify()}
      >
        <LoveArt width={300} height={300} />
      </Animated.View>
      <View style={styles.contentContainer}>
        <Animated.Text entering={FadeInDown.duration(1000).springify()} style={styles.title}>{
          INTRO_SCREEN_01.title}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.description}>
          {INTRO_SCREEN_01.description}
        </Animated.Text>
        <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()}>
          <ScreenIndicator count={6} activeIndex={0} />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={{ alignItems: 'center' }}>
          <PrimaryButton label='Siguiente' onPress={() => navigation.replace('IntroScreen02')} />
        </Animated.View>
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
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 40, fontWeight: "800", color: '#000' },
  description: { opacity: 0.5, color: '#000', marginTop: 16, fontSize: 16 }
})

export default IntroScreen01