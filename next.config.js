const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withPlugins([withFonts, withSass, withCss, withImages], {
  compress: true,
  minified: true,

  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    );

    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: './styles/main.scss',
      },
    });

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
});
