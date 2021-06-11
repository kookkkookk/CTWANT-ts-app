import React, {useEffect} from 'react';
import {StyleSheet, Image, Animated} from 'react-native';

// Function component 方式
// const Welcome2 = props => {
const Welcome2 = () => {
  let animatedBg = new Animated.Value(0);

  useEffect(() => {
    // Animated.timing(animatedBg, {
    //   toValue: 1,
    //   duration: 700,
    //   useNativeDriver: true,
    // }).start();

    Animated.sequence([
      Animated.timing(animatedBg, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(animatedBg, {
        toValue: 0,
        delay: 800,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    // setTimeout(() => props.navigation.replace('Main'), 2100);
  }, []);

  return (
    <Animated.View
      style={[
        {
          opacity: animatedBg.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
        Style.wrapper,
      ]}>
      <Image style={Style.logoIcon} source={require('../images/logo.png')} />
    </Animated.View>
  );
};

/*
// Class component 方式
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.animatedBg = new Animated.Value(0);
    // this.animatedLogo = new Animated.Value(0);
  }

  componentDidMount() {
    // Animated.sequence([
    //   Animated.parallel([
    //     Animated.timing(this.animatedBg, {
    //       toValue: 1,
    //       duration: 700,
    //     }),
    //     Animated.timing(this.animatedLogo, {
    //       toValue: 1,
    //       duration: 650,
    //     }),
    //   ]),
    // ]).start();
    Animated.timing(this.animatedBg, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();

    setTimeout(() => this.props.navigation.replace('Home'), 1500);
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            opacity: this.animatedBg.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          Style.wrapper,
        ]}>
        <Image
          style={Style.logoIcon}
          source={require('../images/logo_w.png')}
        />
      </Animated.View>
    );
  }
}
*/

const Style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoIcon: {
    width: 200,
    height: 36,
  },
});

export default Welcome2;
