const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addPlugin(pluginRss);
};
