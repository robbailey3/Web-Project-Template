// karma.conf.js
require("ts-node").register({
  compilerOptions: {
    module: "commonjs"
  }
});

module.exports = (config: any) => {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["**/*.spec.ts"],
    preprocessors: {
      "**/*.ts": ["webpack"]
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    webpack: require("./webpack.test"),
    plugins: [
      "karma-webpack",
      "karma-jasmine",
      "karma-sourcemap-loader",
      "karma-chrome-launcher",
      "karma-jasmine-html-reporter"
    ],
    browsers: ["Chrome"],
    reporters: ["kjhtml"],
    singleRun: false
  });
};
