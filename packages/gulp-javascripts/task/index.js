const util = require("gulp-util");
const webpack = require("webpack");
const getConfig = require("./config");

const javascripts = (production = false, webpackConfig = {}) => {
  const cfg = Object.assign({}, getConfig(production), webpackConfig);

  const task = done => {
    webpack(cfg, (err, stats) => {
      if (err) {
        throw new util.PluginError("webpack", err);
      }

      util.log("[webpack]", stats.toString());

      done && done();
    });
  };

  task.displayName = "javascripts";
  task.description = "Compile JavaScript using webpack";

  return task;
};

module.exports = javascripts;
