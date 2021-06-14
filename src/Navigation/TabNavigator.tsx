import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  MainStackNavigator,
  NewsStackNavigator,
  CategoriesStackNavigator,
  MallStackNavigator,
  VideosStackNavigator,
  MemberStackNavigator,
} from './StackNavigator';

type TabParamList = {
  Home: { title: string };
  News: { title: string };
  Category: { title: string };
  Video: { title: string };
  Mall: { title: string };
  Member: { title: string };
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}): React.ReactNode | undefined => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'md-star' : 'md-star-outline';
          } else if (route.name === 'Video') {
            iconName = focused ? 'md-play' : 'md-play-outline';
          } else if (route.name === 'Mall') {
            iconName = focused ? 'md-cart' : 'md-cart-outline';
          } else if (route.name === 'Member') {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E03F19',
        inactiveTintColor: '#CCCCCC',
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{title: '首頁'}} />
      <Tab.Screen name="News" component={NewsStackNavigator} options={{title: '最新'}} />
      <Tab.Screen name="Category" component={CategoriesStackNavigator} options={{title: '分類'}} />
      <Tab.Screen name="Video" component={VideosStackNavigator} options={{title: '影音'}} />
      <Tab.Screen name="Mall" component={MallStackNavigator} options={{title: '商城'}} />
      <Tab.Screen name="Member" component={MemberStackNavigator} options={{title: '會員'}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
