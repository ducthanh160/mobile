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
  const [Items, setItems] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
    {key: 7, item: 'item 7'},
    {key: 8, item: 'item 8'},
    {key: 9, item: 'item 9'},
    {key: 10, item: 'item 10'},
  ])
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 11, item: 'item 11'}]);
    setRefreshing(false);
  }

  return (
    <ScrollView style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing = {Refreshing}
          onRefresh = {onRefresh}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text1}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item: {
    backgroundColor: '#4ae1dd',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
  },
  text1: {
    fontSize: 45,
    fontStyle: 'italic',
    color: '#000',
    margin: 10,
  },
})
