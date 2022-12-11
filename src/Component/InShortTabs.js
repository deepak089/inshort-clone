import React, { useContext, useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewScreen from '../Screens/NewScreen';

import { NewsContext } from './Api/ContextApi';
import TopNavigation from './TopNavigation';

const InShortTabs = () => {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: 'first', title: 'Discover' },
    { key: 'second', title: 'News' }
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewScreen
  })
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  )
}

export default InShortTabs

const styles = StyleSheet.create({})