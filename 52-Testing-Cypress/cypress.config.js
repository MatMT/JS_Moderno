const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500',
    viewportHeight: 1500,
    viewportWidth: 1200,
    "testIsolation": false,
    // video: true,
    // videoCompression: 32,
    // videoUploadOnPasses: true,
  },
},
);
