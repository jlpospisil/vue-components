// const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        // '@': path.join(__dirname, 'src'),  // defined by default config provided by vue cli
      },
    },
  },
};
