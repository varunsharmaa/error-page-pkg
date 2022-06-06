const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, "dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "build.js" // string (default)
    },
    devServer: {
        static: {
          directory: path.join(__dirname, ''),
        },
        compress: true,
        port: 9000,
    }
    // unique name for this build to avoid conflicts with other builds in the same HTML
    // name of the configuration, shown in output
    /* Advanced output configuration (click to show) */
    /* Expert output configuration 1 (on own risk) */
    /* Expert output configuration 2 (on own risk) */
  }