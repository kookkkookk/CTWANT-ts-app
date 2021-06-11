import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AnimatedFadeInView from './AnimatedFadeInView';

import { articleList } from '../styles/models/articleList';

const Popular = ({navigation, popularData}) => {
  return (
    <View style={articleList.main}>
      <View style={articleList.titleBox}>
        <Text style={articleList.title}>人氣新聞</Text>
        <View style={articleList.titleDecorate}>
          <View style={articleList.titleDecorateInsideLeft} />
          <View style={articleList.titleDecorateInsideRight} />
        </View>
      </View>
      <View style={articleList.contentBox}>
        {popularData.map((article, artIdx) => (
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
                style={artIdx === 0 ? articleList.contentItem : articleList.contentItemRow}>
                <Image
                  resizeMode="contain"
                  style={artIdx === 0 ? articleList.contentImg : articleList.contentImgRow}
                  source={{uri: article.cover.md}}
                />
                <View style={artIdx !== 0 ? articleList.contentInfo : ''}>
                  <Text
                    numberOfLines={3}
                    style={
                      artIdx === 0 ? articleList.contentTitle : articleList.contentTitleRow
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
  );
};

export default Popular;
