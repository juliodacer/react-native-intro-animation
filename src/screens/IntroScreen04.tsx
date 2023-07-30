import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { INTRO_SCREEN_04 } from '../utils/constanst';
import PrimaryButton from '../components/PrimaryButton';
import ScreenIndicator from '../components/ScreenIndicator';
import DeliveryArt from '../components/artworks/DeliveryArt';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const IntroScreen04 = ({ navigation }: RootStackScreenProps<"IntroScreen04">) => {
  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeInUp.duration(1500).springify()}
        style={styles.arrowLeft}
      >
        <TouchableOpacity onPress={() => navigation.replace('IntroScreen03')}>
          <AntDesign name='arrowleft' size={24} color={'#000'} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(200).duration(1500).springify()} style={styles.image}>
        <DeliveryArt width={300} height={300} />
      </Animated.View>
      <View style={styles.contentContainer}> 
        <Animated.Text entering={FadeInDown.duration(1000).springify()} style={styles.title}>{
          INTRO_SCREEN_04.title}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.description}>
          {INTRO_SCREEN_04.description}
        </Animated.Text >
        <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()}>
          <ScreenIndicator count={6} activeIndex={3} />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={{ alignItems: 'center' }}>
          <PrimaryButton label='Siguiente' onPress={() => navigation.replace('IntroScreen05')} />
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

export default IntroScreen04