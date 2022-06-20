const esbuild = require("esbuild");
const fs = require("fs");
const fse = require("fs-extra");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const manifestPlugin = require("./manifest.js");
const chokidar = require("chokidar");

//get args
var myArgs = process.argv.slice(2);

//build
const build = async () => {
  fse.emptyDirSync("./web/build");

  await esbuild
    .build({
      logLevel: "info",
      entryPoints: ["./src/js/main.js", "./src/css/styles.css"],
      bundle: true,
      minify: myArgs.includes("--minify"),
      outdir: "./web/build",
      assetNames: "[dir]/[name]-[hash]",
      loader: {
        ".woff": "file",
        ".woff2": "file",
        ".eot": "file",
        ".ttf": "file",
        ".otf": "file",
        ".png": "file",
        ".svg": "file",
        ".jpg": "file",
      },
      plugins: [
        manifestPlugin({
          outfile: "./web/build/mix-manifest.json",
          publicPath: "web/build",
        }),
        postCssPlugin({
          plugins: [require("postcss-import"), require("postcss-url"), require("tailwindcss"), require("tailwindcss/nesting"), require("autoprefixer")],
        }),
      ],
    })
    .catch(() => process.exit(1));
};

build();

if (myArgs.includes("--watch")) {
  const watcher = chokidar.watch(["./templates/**/*.*", "./src/js/**/*.*", "./src/css/**/*.*", "./tailwind.config.js"], {});
  watcher.on("change", () => {
    build();
  });
}
