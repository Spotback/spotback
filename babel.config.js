module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg', '.png', '.jpg', '.jpeg'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
