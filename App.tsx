import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation from './src/navigation/BottomNavigation'
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  return (
   <BottomNavigation/>
  )
}

export default App

const styles = StyleSheet.create({})