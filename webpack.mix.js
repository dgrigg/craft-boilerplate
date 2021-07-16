let mix = require("laravel-mix");
require("laravel-mix-clean");
require("laravel-mix-postcss-config");

mix
  .disableNotifications()
  .setPublicPath("web/build")
  .js("src/js/main.js", "js")
  .postCss("src/css/styles.css", "css")
  .sourceMaps();

if (mix.inProduction()) {
  mix
    .clean()
    .version()
    .then(() => {
      const convertToFileHash = require("laravel-mix-make-file-hash");
      convertToFileHash({
        publicPath: "web/build",
        blacklist: ["assets"],
        keepBlacklistedEntries: true,
        manifestFilePath: "web/build/mix-manifest.json",
      });
    });
}
