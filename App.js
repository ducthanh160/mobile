import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Linking,
  RefreshControl,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export default function App() {
  const [number, setNumber] = useState(0)
  const onPress = () => {
    setNumber(number + 2)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text1}>{number * 5}</Text>
      <Button title='Add' onPress={onPress}></Button>
      <Text style={styles.text1}>This is {number} time</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 45,
    fontStyle: 'italic',
    color: '#000',
    margin: 10,
  },
})
