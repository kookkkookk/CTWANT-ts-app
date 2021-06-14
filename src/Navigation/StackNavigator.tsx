import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

import Home from '../Screens/Home';
import News from '../Screens/News';
import Categories from '../Screens/Categories';
import Mall from '../Screens/Mall';
import Article from '../Screens/Article';

type StackParamList = {
  Home: { headerShown: boolean, title: string } | undefined;
  News: { headerShown: boolean, title: string } | undefined;
  Categories: { headerShown: boolean, title: string } | undefined;
  Mall: { headerShown: boolean, title: string } | undefined;
  Videos: { headerShown: boolean, title: string } | undefined;
  Member: { headerShown: boolean, title: string } | undefined;
  Article: undefined
};

const Stack = createStackNavigator<StackParamList>();

const MainStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '首頁',
        }}
      />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          title: '最新',
        }}
      />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

const CategoriesStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: '分類',
        }}
      />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

const MallStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mall"
        component={Mall}
        options={{
          headerShown: false,
          title: '商城',
        }}
      />
    </Stack.Navigator>
  );
};

// function Videos({navigation}) {
function Videos(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>影音</Text>
    </View>
  );
}
function Member(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>會員中心</Text>
    </View>
  );
}

const VideosStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{
          headerShown: false,
          title: '影音',
        }}
      />
    </Stack.Navigator>
  );
};

const MemberStackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Member"
        component={Member}
        options={{
          headerShown: false,
          title: '會員',
        }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  NewsStackNavigator,
  CategoriesStackNavigator,
  MallStackNavigator,
  VideosStackNavigator,
  MemberStackNavigator,
};
