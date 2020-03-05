module.exports = {
  staticFileGlobs: [
    "build/static/css/**.css",
    "build/static/js/**.js",
    "build/index.html"
  ],
  swFilePath: "./build/service-worker.js",
  templateFilePath: "./service-worker.tmpl",
  stripPrefix: "build/",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fakecarsapi\.appspot\.com/,
      handler: "networkFirst"
    },
    {
      urlPattern: /^https:\/\/i\.ebayimg\.com/,
      handler: "cacheFirst",
      cache: {
        maxEntries: 10
      }
    },
  ]
};
