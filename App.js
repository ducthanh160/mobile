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
  FlatList,
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
    {name: 'item 1'},
    {name: 'item 3'},
    {name: 'item 2'},
    {name: 'item 4'},
    {name: 'item 5'},
    {name: 'item 6'},
    {name: 'item 7'},
    {name: 'item 8'},
    {name: 'item 9'},
    {name: 'item 10'},
    {name: 'item 11'},
    {name: 'item 12'},
    {name: 'item 13'},
  ])
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {id: 14, name: 'item 14'}]);
    setRefreshing(false);
  }

  return (
    <FlatList
      keyExtractor={(item,index)=> index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text1}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing = {Refreshing}
          onRefresh = {onRefresh}
        />
      }
    />
    /*<ScrollView style={styles.body}
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
            <View style={styles.item}{id={object{id}>
              <Text style={styles.text1}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>*/
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item: {
    backgroundColor: '#4ae1dd',
    alignItems: 'center',
    justifyContent: 'center',
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
