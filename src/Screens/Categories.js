import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AnimatedFadeInView from '../Components/AnimatedFadeInView';

import { safeAreaView } from '../styles/models/safeAreaView';
import { articleList } from '../styles/models/articleList';

const Categories = ({navigation}) => {
  let [categoryData, setCategoryData] = useState([]);
  let [dimesions, setDimesions] = useState({});

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios.get('https://api.ctwant.com/api/v1/home');
      // console.log('res: ', res.data);
      const changeToArr = Object.keys(res.data.data.categories).map(key => {
        return {
          articles: res.data.data.categories[key],
          name: key,
        };
      });
      setCategoryData(prevState => (prevState = changeToArr));
      // console.log(categoryData);
    } catch (err) {
      console.warn(err);
      setCategoryData((categoryData = []));
    }
  };

  const findDimesions = (categoryIdx, layout) => {
    // console.log('categoryIdx: ', categoryIdx);
    // console.log('layout: ', layout);
    // const {x, y, width, height} = layout;
    // console.log(x);
    // console.log(y);
    // console.log(width);
    // console.log(height);
    // setDimesions(
    //   state => ({
    //     ...state,
    //     ['category_' + categoryIdx]: {
    //       y: layout.y,
    //     },
    //   })
    // );
    // console.log('dimesions: ', dimesions);
  };

  // <View key={item.name} style={articleList.main} onLayout={(event) => findDimesions(idx, event.nativeEvent.layout)}>
  return categoryData.length > 0 ? (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeAreaView.top} />
      <View style={{height: 'auto'}}>
        <ScrollView horizontal={true} style={{}}>
          {categoryData.map(obj => (
            <TouchableOpacity key={obj.name} style={{padding: 15}}>
              <Text style={{fontSize: 18}}>{obj.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={articleList.wrapper}>
        {categoryData.map((item, idx) => (
          <View key={item.name} style={articleList.main}>
            <View style={articleList.titleBox}>
              <Text key={idx} style={articleList.title}>
                {item.name}
              </Text>
              <View style={articleList.titleDecorate}>
                <View style={articleList.titleDecorateInsideLeft} />
                <View style={articleList.titleDecorateInsideRight} />
              </View>
            </View>
            <View style={articleList.contentBox}>
              {item.articles.map((article, artIdx) => (
                <TouchableOpacity
                  key={article.article_id}
                  onPress={() => navigation.navigate('Article', {
                      articleId: article.article_id,
                    })
                  }>
                  <AnimatedFadeInView
                    delay={artIdx * 100}
                    animatedFrom={'right'}
                    value={20}>
                    <View
                      style={
                        artIdx === 0 ? articleList.contentItem : articleList.contentItemRow
                      }>
                      <Image
                        resizeMode="contain"
                        style={
                          artIdx === 0 ? articleList.contentImg : articleList.contentImgRow
                        }
                        source={{uri: article.cover.md}}
                      />
                      <View style={artIdx !== 0 ? articleList.contentInfo : ''}>
                        <Text
                          numberOfLines={3}
                          style={
                            artIdx === 0
                              ? articleList.contentTitle
                              : articleList.contentTitleRow
                          }>
                          {article.title}
                        </Text>
                        <View style={articleList.contentPublishBox}>
                          <Text style={articleList.contentPublishDate}>
                            {/* {item.name}
                            {article.article_id}
                            {'-'} */}
                            {article.publish_at}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </AnimatedFadeInView>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  ) : (
    <ActivityIndicator size={24} color={'grey'} />
  );
};

export default Categories;
