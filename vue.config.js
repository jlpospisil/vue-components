// const path = require('path');
const themeSassLoader = require('./src/theme-sass-loader');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        // '@': path.join(__dirname, 'src'),  // defined by default config provided by vue cli
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        functions: {
          'theme()': themeSassLoader.getTheme,
          'theme-item($keys)': themeSassLoader.getThemeItem,
        },
      },
    },
  },
};
