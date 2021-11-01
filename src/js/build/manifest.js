const fs = require("fs");
const path = require("path");
const { writeFile } = require("fs").promises;

module.exports = (options = {}) => ({
  name: "manifest",
  setup(build) {
    build.initialOptions.metafile = true;
    console.log(build.initialOptions);

    if (options.hash !== false && !build.initialOptions.entryNames) {
      build.initialOptions.entryNames = "[dir]/[name]-[hash]";
    }

    let mappings = {};

    build.onEnd(async result => {
      for (const outputFilename in result.metafile.outputs) {
        let outputMeta = result.metafile.outputs[outputFilename];
        let sourceFile = path.basename(outputMeta.entryPoint);
        let destFile = path.basename(outputFilename);

        let outputPath = path.dirname(outputFilename);
        let pattern = `^.*\/*${options.publicPath}`;

        manifestPath = outputPath.replace(new RegExp(pattern), "");

        let source = `${manifestPath}/${sourceFile}`;
        let dest = `${manifestPath}/${destFile}`;

        mappings[source] = dest;
      }

      await writeFile(options.outfile, JSON.stringify(mappings, null, 2));

      return {
        path: options.outfile,
      };
    });
  },
});
