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

const News = ({navigation}) => {
  let [newsData, setNewsData] = useState({
    items: [],
  });

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await axios.get(
        'https://api.ctwant.com/api/v1/category/最新',
      );
      // console.log('res: ', res.data);
      setNewsData((newsData = res.data.data.articles));
      // console.log('newsData: ', newsData);
    } catch (err) {
      console.warn(err);
      setNewsData((newsData = {items: []}));
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeAreaView.top} />
      {newsData.items.length > 0 ? (
        <ScrollView style={articleList.wrapper}>
          <View style={articleList.main}>
            <View style={articleList.titleBox}>
              <Text style={articleList.title}>最新新聞</Text>
              <View style={articleList.titleDecorate}>
                <View style={articleList.titleDecorateInsideLeft} />
                <View style={articleList.titleDecorateInsideRight} />
              </View>
            </View>
            <View style={articleList.contentBox}>
              {newsData.items.map((article, artIdx) => (
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
                    <View style={articleList.contentItem}>
                      <Image
                        resizeMode="contain"
                        style={articleList.contentImg}
                        source={{uri: article.cover.md}}
                      />
                      <View>
                        <Text
                          numberOfLines={3}
                          style={articleList.contentTitle}>
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
        </ScrollView>
      ) : (
        <ActivityIndicator size={24} color={'grey'} />
      )}
    </>
  );
};

export default News;
