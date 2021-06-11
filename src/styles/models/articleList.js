import {StyleSheet} from 'react-native';
import {colors} from '../base';

export const articleList = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 30,
  },
  logoBox: {
    width: '100%',
    height: 50,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: 87,
    height: 33,
  },
  main: {
    flex: 1,
    marginTop: 50,
    marginBottom: 30,
  },
  titleBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#4A4A4A',
    fontSize: 24,
  },
  titleDecorate: {
    width: 60,
    height: 5,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
  },
  titleDecorateInsideLeft: {
    width: 25,
    height: 5,
    backgroundColor: colors.black,
  },
  titleDecorateInsideRight: {
    width: 35,
    height: 5,
    backgroundColor: colors.primary,
  },
  contentBox: {
    flex: 1,
    paddingHorizontal: 15,
  },
  contentItem: {
    flex: 1,
    marginBottom: 15,
  },
  contentItemRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  contentImg: {
    width: '100%',
    height: 190,
  },
  contentImgRow: {
    width: '50%',
    height: 125,
  },
  contentInfo: {
    width: '50%',
    marginTop: 5,
  },
  contentTitle: {
    color: '#2e2e2e',
    fontSize: 18,
    lineHeight: 24,
    marginTop: 5,
  },
  contentTitleRow: {
    color: '#2e2e2e',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 5,
    marginLeft: 10,
  },
  contentPublishBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  contentPublishDate: {
    fontSize: 14,
    color: '#919191',
  },
});
