import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Form from './Form'

export default  App = SwitchNavigator(
  {
    SignIn,
    SignUp,
    Form
  },
  {
    initialRouteName: 'Form'
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
