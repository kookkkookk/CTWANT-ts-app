module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-inline-styles/no-inline-styles': 0, // 可以在 dom 直接使用 style 編寫
    'react-hooks/exhaustive-deps': 0, // useEffect, 第二個參數可以是空[]
    'prettier/prettier': 0, // 註解可以不必換新一行
  },
};
