// config-overrides.js

const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 1048576, // Aumenta el límite a 10KB
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  })
);