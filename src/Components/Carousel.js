import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');
const picHeight = 200;

const Carousel = ({navigation, carouselData}) => { // 從 props 解構
  return (
    <Swiper
      style={SwiperStyle.wrapper}
      height={picHeight}
      autoplay={true}
      autoplayTimeout={4}
      showsPagination={false}
      showsButtons={true}
      nextButton={
        <Text>
          <Ionicons
            name={'arrow-forward-circle-sharp'}
            size={24}
            color={'#FFFFFF'}
          />
        </Text>
      }
      prevButton={
        <Text>
          <Ionicons name={'arrow-back-circle'} size={24} color={'#FFFFFF'} />
        </Text>
      }
      removeClippedSubviews={false}>
      {carouselData.map(item => (
        <TouchableOpacity
          key={item.article_id}
          onPress={() => navigation.navigate('Article', {
              articleId: item.article_id,
            })
          }>
          <View style={SwiperStyle.slide}>
            <Image
              resizeMode="stretch"
              style={Styles.img}
              source={{uri: item.cover.md}}
            />
            <View style={Styles.textBox}>
              <Text numberOfLines={1} style={Styles.text}>
                {item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </Swiper>
  );
};

const SwiperStyle = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  slide: {
    width,
    height: picHeight,
    position: 'relative',
  },
});

const Styles = StyleSheet.create({
  img: {
    width,
    height: picHeight,
  },
  textBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontSize: 16,
    padding: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Carousel;
