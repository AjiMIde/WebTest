// Karma configuration
/**
 * ## 在配置文件里面配置：
 * * frameworks: ['jasmine', 'browserify'],
 *
 *
 * https://stackoverflow.com/questions/19117092/jasmine-tests-in-karma-uncaught-referenceerror-require-is-not-defined
 * @param config
 */
module.exports = function (config) {
  config.set({
    // frameworks:     frameworks to use: available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // reporters:      test results reporter to use
    //                 possible values: 'dots', 'progress'(default): available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // logLevel:       level of logging: possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    frameworks: ['jasmine', 'browserify'],
    reporters: ['kjhtml'],
    logLevel: config.LOG_INFO,

    // basePath:    base path that will be used to resolve all patterns (eg. files, exclude)
    // files:       list of files / patterns to load in the browser
    // exclude:     list of files to exclude
    basePath: '../JasmineTest/JasmineTest-1/',
    files: ['src/**/*.js', 'spec/**/*.js'],
    exclude: [],

    // port:          web server port
    // colors:        enable / disable colors in the output (reporters and logs)
    // autoWatch      enable / disable watching file and executing tests whenever any file changes
    // browsers:      start these browsers, available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'spec/**/*.js': ['browserify']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRuadn: false,

    //
    // plugins: ['karma-browserify'],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
