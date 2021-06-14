import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {MainStackNavigator} from './Navigation/StackNavigator';
import BottomTabNavigator from './Navigation/TabNavigator';
import Welcome from './Screens/Welcome';

const App3 = (): JSX.Element => {
  const [splash, setSplash] = useState<boolean>(true);

  useEffect((): () => void => {
    // 2秒展示啟動畫面
    const startSplash = setTimeout((): void => {
      setSplash(false);
    }, 2200);

    return (): void => {
      clearTimeout(startSplash);
    };
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
