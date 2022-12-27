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
  SectionList,
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
  ]);
  const [Sections, setSection] = useState([
    {
      title: 'Title 1',
      data: ['item 1-1', 'item 1-2'],
    }
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSection([...Sections, {
      title: 'Title ' + adding_index,
      data: ['item ' + adding_index + '-1', 'item ' + adding_index + '-2'],
    }])
    setRefreshing(false);
  };
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <SectionList
      keyExtractor={(item,index)=> index.toString()}
      sections={Sections}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text_item}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section})=> (
        <View style={styles.header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing = {Refreshing}
          onRefresh = {onRefresh}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  text_header: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  text_item: {
    color: '#000000',
    fontSize: 35,
    margin: 5,
  },
})
