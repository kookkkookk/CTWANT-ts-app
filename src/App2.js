import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import News from './Screens/News';
import Categories from './Screens/Categories';
// import Article from './Screens/Article';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen
//           name="Welcome"
//           component={Welcome}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="Article"
//           component={Article}
//           options={({route}) => ({title: route.params.categoryName})} // 拿取動態的title
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
function Videos({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>影音</Text>
    </View>
  );
}
function Member({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>會員中心</Text>
    </View>
  );
}

const App = () => {
  const [splash, setSplash] = useState(true);

  // Hook useEffect 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 1.5秒展示啟動畫面
    setTimeout(() => {
      setSplash(false);
    }, 2100);
  }, []);

  return splash ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 0, backgroundColor: '#E03F19'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === '首頁') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === '最新') {
                  iconName = focused ? 'book' : 'book-outline';
                } else if (route.name === '分類') {
                  iconName = focused ? 'md-star' : 'md-star-outline';
                } else if (route.name === '影音') {
                  iconName = focused ? 'md-play' : 'md-play-outline';
                } else if (route.name === '會員') {
                  iconName = focused ? 'md-person' : 'md-person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#E03F19',
              inactiveTintColor: '#CCCCCC',
            }}>
            <Tab.Screen name="首頁" component={Home} />
            <Tab.Screen name="最新" component={News} />
            <Tab.Screen name="分類" component={Categories} />
            <Tab.Screen name="影音" component={Videos} />
            <Tab.Screen name="會員" component={Member} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
