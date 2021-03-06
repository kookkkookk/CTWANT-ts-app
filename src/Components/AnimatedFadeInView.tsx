import React, {useEffect} from 'react';
import {Animated} from 'react-native';

const AnimatedFadeInView2 = props => {
  let _animatedValue = new Animated.Value(0);
  let {children} = props;

  useEffect(() => {
    let {duration = 500, delay} = props;
    Animated.timing(_animatedValue, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }, []);

  const _getTransformStyle = () => {
    let {animatedFrom = 'bottom', value = 50} = props;
    let transformStyle = [];
    let transformAttribute = 'translateY';
    if (animatedFrom === 'bottom' || animatedFrom === 'top') {
      transformAttribute = 'translateY';
      transformStyle.push({
        [transformAttribute]: _animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [animatedFrom === 'bottom' ? value : -1 * value, 0],
        }),
      });
    } else if (animatedFrom === 'right' || animatedFrom === 'left') {
      transformAttribute = 'translateX';
      transformStyle.push({
        [transformAttribute]: _animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [animatedFrom === 'right' ? value : -1 * value, 0],
        }),
      });
    }
    return transformStyle;
  };

  let transformStyle = _getTransformStyle();

  return (
    <Animated.View
      style={{
        opacity: _animatedValue,
        transform: transformStyle,
      }}>
      {children}
    </Animated.View>
  );
};

/*
class AnimatedFadeInView extends Component {
  constructor(props) {
    super(props);
    this._animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    let {duration = 500, delay} = this.props;
    Animated.timing(this._animatedValue, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }

  _getTransformStyle = () => {
    let {animatedFrom = 'bottom', value = 50} = this.props;
    let transformStyle = [];
    let transformAttribute = 'translateY';
    if (animatedFrom === 'bottom' || animatedFrom === 'top') {
      transformAttribute = 'translateY';
      transformStyle.push({
        [transformAttribute]: this._animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [animatedFrom === 'bottom' ? value : -1 * value, 0],
        }),
      });
    } else if (animatedFrom === 'right' || animatedFrom === 'left') {
      transformAttribute = 'translateX';
      transformStyle.push({
        [transformAttribute]: this._animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [animatedFrom === 'right' ? value : -1 * value, 0],
        }),
      });
    }
    return transformStyle;
  };

  render() {
    let {children} = this.props;

    let transformStyle = this._getTransformStyle();
    return (
      <Animated.View
        style={{
          opacity: this._animatedValue,
          transform: transformStyle,
        }}>
        {children}
      </Animated.View>
    );
  }
}
*/

export default AnimatedFadeInView2;
