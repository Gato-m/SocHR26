const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Šeit skaidri iestatām Router root
config.transformer.env = {
  EXPO_ROUTER_APP_ROOT: 'app',
};

module.exports = config;
