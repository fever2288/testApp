module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    ignore: [
      'node_modules/(?!(camelize-ts|expo|expo-modules-core|react-native|@react-native|@react-navigation|@react-navigation|my-project|react-native-button)/)',
    ],
  };
};
