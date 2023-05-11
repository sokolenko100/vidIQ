module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js', //?
          '.android.tsx',
          '.ios.js', //?
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@wrappers': './src/wrappers',
        },
      },
    ],
  ],
};
