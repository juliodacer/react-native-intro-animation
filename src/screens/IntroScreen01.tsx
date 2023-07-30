import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import LoveArt from '../components/artworks/LoveArt'
import { INTRO_SCREEN_01 } from '../utils/constanst';

interface Props {
  navigation: RootStackScreenProps<"IntroScreen01">
}

const IntroScreen01: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <LoveArt width={300} height={300} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{
          INTRO_SCREEN_01.title}
        </Text>
        <Text style={styles.description}>
          {INTRO_SCREEN_01.description}
        </Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginVertical: 32
        }} >
          <View style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: '#000' }} />
          <View style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: '#0003' }} />
        </View>
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <TouchableOpacity
            style={
              {
                backgroundColor: '#000',
                paddingHorizontal: 16,
                height: 52,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
              Siguiente
            </Text>
          </TouchableOpacity>
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
    alignItems: 'center'
  },
  title: { fontSize: 40, fontWeight: "800", color: '#000' },
  description: { opacity: 0.5, color: '#000', marginTop: 16, fontSize: 16 }
})

export default IntroScreen01