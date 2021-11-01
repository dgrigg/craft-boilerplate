const esbuild = require("esbuild");
const fs = require("fs");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const manifestPlugin = require("./manifest.js");
const chokidar = require("chokidar");

//clean out build directory
fs.rmdirSync("./web/build", { recursive: true, force: true });

//get args
var myArgs = process.argv.slice(2);

//build
const build = async () => {
  await esbuild
    .build({
      logLevel: "info",
      entryPoints: ["./src/js/main.js", "./src/css/styles.css"],
      bundle: true,
      minify: myArgs.includes("--minify"),
      outdir: "./web/build",
      plugins: [
        manifestPlugin({
          outfile: "./web/build/mix-manifest.json",
          publicPath: "web/build",
        }),
        postCssPlugin({
          plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("tailwindcss/nesting"),
            require("autoprefixer"),
          ],
        }),
      ],
    })
    .catch(() => process.exit(1));
};

build();

if (myArgs.includes("--watch")) {
  const watcher = chokidar.watch(
    ["./templates/**/*.*", "./src/js/**/*.*", "./src/css/**/*.*"],
    {}
  );
  watcher.on("change", () => {
    build();
  });
}
