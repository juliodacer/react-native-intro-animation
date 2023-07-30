import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, useWindowDimensions } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { LOGIN_SCREEN } from '../utils/constanst';
import PrimaryButton from '../components/PrimaryButton';
import LoginArt from '../components/artworks/LoginArt';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const LoginScreen = ({ navigation }: RootStackScreenProps<"LoginScreen">) => {
  const dimensions = useWindowDimensions()
  return (
    <KeyboardAvoidingView behavior='position' style={{ flex: 1 }} keyboardVerticalOffset={60}>
      <View style={[styles.container, {minHeight: dimensions.height}]}>
        <Animated.View
          entering={FadeInUp.duration(1500).springify()}
          style={styles.arrowLeft}
        >
          <TouchableOpacity onPress={() => navigation.replace('IntroScreen05')}>
            <AntDesign name='arrowleft' size={24} color={'#000'} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(200).duration(1500).springify()} style={styles.image}>
          <LoginArt width={240} height={240} />
        </Animated.View>
        <View style={styles.contentContainer}>
          <Animated.Text entering={FadeInDown.duration(1000).springify()} style={styles.title}>{
            LOGIN_SCREEN.title}
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.description}>
            {LOGIN_SCREEN.description}
          </Animated.Text >
          <View
            style={{ alignItems: 'center', gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()} style={{ width: '100%' }}>
              <TextInput
                placeholder='Email'
                style={styles.input}
              />
              <Ionicons name='mail' size={24} style={styles.icon} />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={{ width: '100%' }}>
              <TextInput
                placeholder='Contraseña'
                style={styles.input}
              />
              <Ionicons name='lock-closed' size={24} style={styles.icon} />
            </Animated.View >
          </View>

          <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} style={{ marginTop: 32, alignItems: 'center' }}>
            <PrimaryButton label='Iniciar sesión' onPress={() => navigation.replace('LoginScreen')} />
          </Animated.View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    justifyContent: 'center',
    // minHeight: 240
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
    width: '100%',

  },
  icon: { position: "absolute", left: 12, top: 12, color: '#000', opacity: 0.4 }
})

export default LoginScreen