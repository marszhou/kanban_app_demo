
module.exports = function karmaConfig(config) {
  config.set({
    framework: [
      'mocha'
    ],
    reporters: [
      'spec',
      'coverage'
    ],
    files: [
      'node_modules/phantomjs-polyfil/bind-polyfill.js',
      'tests/**/*_test.*'
    ],

    preprocessors: {
      'tests/**/*_test.*': ['webpack', 'sourcemap']
    },

    browsers: [
      'PhantomJS'
    ],

    singleRun: true,

    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'

    },

    webpack: require('./wepack.config'),

    webpackMiddleware: {
      noInfo: true
    }
  });
};