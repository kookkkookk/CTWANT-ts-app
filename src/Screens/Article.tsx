import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';

const Article = ({route}) => {
  let [isLoading, setIsLoading] = useState(false);
  let [data, setData] = useState({});

  useEffect(() => {
    console.log('getArticle');
    getArticle();
  }, [route.params.articleId]);

  const getArticle = async () => {
    console.log('articleId: ', route.params.articleId);
    const articleId = route.params.articleId;
    try {
      setIsLoading((isLoading = true));
      const res = await axios.get(
        `https://api.ctwant.com/api/v1/article/${articleId}`,
      );
      setData((data = res.data.data.article));
      setIsLoading((isLoading = false));
    } catch (err) {
      console.warn(err);
      setData((data = {}));
      setIsLoading((isLoading = false));
    }
  };

  const authorFilter = participants => {
    if (participants !== undefined) {
      return participants.author !== ''
        ? `作者／${participants.author}`
        : participants.editor !== ''
        ? `編輯／${participants.editor}`
        : `記者／${participants.reporter}`;
    } else {
      return 'Ctwant';
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={Style.wrapper}>
        <View style={Style.container}>
          {isLoading ? (
            <ActivityIndicator
              size={24}
              style={Style.activityIndicator}
              color={'grey'}
            />
          ) : (
            <View>
              <Text style={Style.title}>{data.title}</Text>
              <View style={Style.publishAndAuthor}>
                <Text style={Style.publish}>{data.publish_at}</Text>
                <Text style={Style.author}>
                  {authorFilter(data.participants)}
                </Text>
              </View>
              <Image
                resizeMode="contain"
                style={Style.image}
                source={{uri: data.cover !== undefined ? data.cover.md : 'https://static.ctwant.com/images/dist/default_cover_md.png'}}
              />
              <Text style={Style.caption}>{data.caption}</Text>
              <Text style={Style.contentText}>{data.pure_content}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const Style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 50,
  },
  activityIndicator: {
    paddingVertical: 30,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  publishAndAuthor: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  publish: {
    fontSize: 18,
  },
  author: {
    fontSize: 18,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: 250,
    marginTop: 20,
  },
  caption: {
    fontSize: 16,
    color: '#939393',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  contentText: {
    fontSize: 18,
    color: '#2e2e2e',
    lineHeight: 26,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Article;
