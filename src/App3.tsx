import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {MainStackNavigator} from './Navigation/StackNavigator';
import BottomTabNavigator from './Navigation/TabNavigator';
import Welcome from './Screens/Welcome';

const App3 = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    // 2秒展示啟動畫面
    setTimeout(() => {
      setSplash(false);
    }, 2200);
  }, []);

  return splash ? (
    <Welcome />
  ) : (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default App3;
