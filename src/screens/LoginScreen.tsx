import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { LOGIN_SCREEN } from '../utils/constanst';
import PrimaryButton from '../components/PrimaryButton';
import ScreenIndicator from '../components/ScreenIndicator';
import LoginArt from '../components/artworks/LoginArt';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

// interface Props {
//   navigation: RootStackScreenProps<"IntroScreen01">
// }

const LoginScreen = ({ navigation }: RootStackScreenProps<"LoginScreen">) => {
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
        <LoginArt width={300} height={300} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{
          LOGIN_SCREEN.title}
        </Text>
        <Text style={styles.description}>
          {LOGIN_SCREEN.description}
        </Text>
        {/* <ScreenIndicator count={6} activeIndex={5} /> */}
        <View style={{ alignItems: 'center', gap: 16, marginTop: 32 }}>
          <View style={{ width: '100%' }}>
            <TextInput
              placeholder='Email'
              style={styles.input}
            />
            <Ionicons name='mail' size={24} style={styles.icon} />
          </View>
          <View style={{ width: '100%' }}>
            <TextInput
              placeholder='Contraseña'
              style={styles.input}
            />
            <Ionicons name='lock-closed' size={24} style={styles.icon} />
          </View>
        </View>

        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <PrimaryButton label='Iniciar Sesión' onPress={() => navigation.navigate('IntroScreen02')} />
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
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 40, fontWeight: "800", color: '#000' },
  description: { opacity: 0.5, color: '#000', marginTop: 16, fontSize: 16 },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    paddingLeft: 48,
    paddingRight: 12,
    height: 48,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    width: '100%'
  },
  icon: { position: "absolute", left: 12, top: 12, color: '#000', opacity: 0.4 }
})

export default LoginScreen