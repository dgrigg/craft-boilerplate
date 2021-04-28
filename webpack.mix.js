let mix = require("laravel-mix");
require("laravel-mix-clean");
require("laravel-mix-postcss-config");

mix
  .disableNotifications()
  .setPublicPath("web/build")
  .js("src/js/main.js", "js")
  .postCss("src/css/styles.css", "css")
  .extract()
  .sourceMaps();

if (mix.inProduction()) {
  mix
    .clean()
    .version()
    .then(() => {
      const convertToFileHash = require("laravel-mix-make-file-hash");
      convertToFileHash({
        publicPath: "web/build",
        manifestFilePath: "web/build/mix-manifest.json",
      });
    });
}
