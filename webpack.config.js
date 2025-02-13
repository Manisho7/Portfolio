module.exports = function override(config) {
    config.devServer = {
      headers: {
        "Content-Security-Policy": "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:; object-src 'none';",
      },
    };
    return config;
  };
  