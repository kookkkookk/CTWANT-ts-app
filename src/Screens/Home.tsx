import React, {useRef, useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from '../Components/Carousel';
import Popular from '../Components/Popular';

import { colors } from '../styles/base';
import { safeAreaView } from '../styles/models/safeAreaView';
import { headerStyle } from '../styles/models/header';

const Home2 = ({navigation/*, route*/}: any): JSX.Element => {
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let [carouselData, setCarouselData] = useState<[]>([]);
  let [popularData, setPopularData] = useState<[]>([]);

  const [headerShown, setHeaderShown] = useState<boolean>(false);
  const translation: Animated.Value = useRef(new Animated.Value(-45)).current;

  useEffect((): void => {
    console.log('Home navigation: ', navigation);
    // console.log('route: ', route);
    if (popularData.length <= 0) {
      getCategories();
    }

    Animated.timing(translation, {
      toValue: headerShown ? -45 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  const getCategories = async (): Promise<void> => {
    try {
      setIsLoading((isLoading = true));
      const res = await axios.get('https://api.ctwant.com/api/v1/home');
      // console.log('res: ', res.data);
      setCarouselData((carouselData = res.data.data.carousel));
      // console.log('carouselData: ', carouselData);
      setPopularData((popularData = res.data.data.popular));
      setIsLoading((isLoading = false));
    } catch (err) {
      console.warn(err);
      setCarouselData((carouselData = []));
      setPopularData((popularData = []));
      setIsLoading((isLoading = false));
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeAreaView.top} />
      <Animated.View
        style={[
          headerStyle.main,
          {
            position: 'absolute',
            top: 45,
            left: 0,
            right: 0,
            zIndex: 1,
            transform: [
              { translateY: translation },
            ],
          },
        ]}
        // style={{
        //   width: '100%',
        //   backgroundColor: colors.primary,
        //   paddingBottom: 5,
        //   display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'space-between',
        //   alignItems: 'center',
        //   position: 'absolute',
        //   top: 45,
        //   left: 0,
        //   right: 0,
        //   zIndex: 1,
        //   transform: [
        //     { translateY: translation },
        //   ],
        // }}
      >
        <Image
          resizeMode="contain"
          style={{marginLeft: 10, width: 130}}
          source={require('../images/logo_w.png')}
        />
        <TouchableOpacity>
          <Text style={{marginRight: 10}}>
            <Ionicons name={'search-sharp'} size={26} color={colors.white} />
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {isLoading === true ? (
        <ActivityIndicator
          size={24}
          style={{paddingVertical: 30}}
          color={colors.primary}
        />
      ) : (
        <ScrollView
          onScroll={(event) => {
            const scrolling = event.nativeEvent.contentOffset.y;
            // console.log('scrolling: ', scrolling);
            if (scrolling > 200) {
              setHeaderShown(true);
            } else {
              setHeaderShown(false);
            }
          }}
          scrollEventThrottle={16}
          style={{paddingTop: 43}}
        >
          <Carousel navigation={navigation} carouselData={carouselData} />
          <Popular navigation={navigation} popularData={popularData} />
        </ScrollView>
      )}
    </>
  );
};

/*
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      selectedTab: 'tabCategories',
    };
  }

  componentDidMount() {
    // this.getCategories();
  }

  getCategories = async () => {
    // try {
    //   this.setState({isLoading: true});
    //   const res = await axios.get('https://api.styletc.com/api/v2/home');
    //   // console.log('res: ', res.data);
    //   this.setState({
    //     data: res.data.data.categories,
    //     isLoading: false,
    //   });
    //   // console.log('data:', this.state.data);
    // } catch (err) {
    //   console.warn(err);
    //   this.setState({
    //     data: [],
    //     isLoading: false,
    //   });
    // }
  };

  render() {
    const {isLoading, data, selectedTab} = this.state;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={Style.wrapper}>
          <Text>Home</Text>
        </SafeAreaView>
      </>
    );
  }
}
*/

export default Home2;
