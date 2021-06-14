import React, {useRef, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const Mall = ({navigation, route}) => {
  const webviewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // ?utm_source=ctwant-app&utm_medium=ctwant-app-tab&utm_campaign=好康吧

  const backButtonHandler = () => {
    if (webviewRef.current) {webviewRef.current.goBack();}
  };

  const frontButtonHandler = () => {
    if (webviewRef.current) {webviewRef.current.goForward();}
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 0, backgroundColor: '#FFFFFF'}} />
      <WebView
        style={Style.wrapper}
        source={{ uri: 'https://shop.ctwant.com' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            size={24}
            style={Style.activityIndicator}
            color={'#E03F19'}
          />
        )}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);
        }}
      />
      <View style={Style.tabBarContainer}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text>
            <Ionicons name={'ios-arrow-back'} size={20} color={'#AAAAAA'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text>
            <Ionicons name={'ios-arrow-forward'} size={20} color={'#AAAAAA'} />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Style = StyleSheet.create({
  wrapper: {
    flex: 1,
    width,
  },
  activityIndicator: {
    paddingVertical: 30,
  },
  tabBarContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EEEEEE',
  },
});

export default Mall;
