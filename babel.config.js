module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
};