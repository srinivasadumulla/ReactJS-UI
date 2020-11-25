const path = require("path");
const replace = require("replace-in-file");

class WorkerPreloadPlugin {
  constructor({ publicPath, bundles, replaceHash }) {
    this.publicPath = publicPath;
    this.bundles = bundles;
    (this.replaceHash = replaceHash), (this.hash = null);
    this.outputPath = null;
    this.results = null;
  }

  apply(compiler) {
    compiler.hooks.afterCompile.tapAsync(
      this.constructor.name,
      (compilation, callback) => {
        try {
          this.hash = compilation.hash;
        } finally {
          callback(null, compilation);
        }
      }
    );

    compiler.hooks.beforeRun.tap(this.constructor.name, ({ outputPath }) => {
      this.outputPath = outputPath;
    });

    compiler.hooks.compilation.tap(this.constructor.name, (compiler) => {
      compiler.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
        this.constructor.name,
        (pluginArgs, callback) => {
          try {
            pluginArgs.body.forEach((script) => {
              if (script.tagName === "script") {
                script.attributes = Object.assign({}, script.attributes, {
                  src: `${script.attributes.src}?${this.hash}`,
                });
              }
            });

            this.bundles.forEach((bundle) => {
              pluginArgs.body.push({
                tagName: "link",
                closeTag: true,
                attributes: {
                  as: "script",
                  rel: "prefetch",
                  href: `${this.publicPath}/${bundle}.js?${this.hash}`,
                },
              });
            });
          } finally {
            callback(null, pluginArgs);
          }
        }
      );
    });

    compiler.hooks.done.tap(this.constructor.name, (stats) => {
      const logger = stats.compilation.getLogger(this.constructor.name);
      try {
        if (this.outputPath && this.replaceHash) {
          this.results = replace.sync({
            files: [path.join(this.outputPath, "**", "*.js")],
            from: new RegExp(this.replaceHash, "g"),
            to: this.hash,
            countMatches: true,
            encoding: "utf8",
          });

          logger.info(
            `${this.constructor.name}:`,
            JSON.stringify(
              {
                replaceHash: this.replaceHash,
                hash: this.hash,
                outputPath: this.outputPath,
                files: this.results,
              },
              null,
              2
            )
          );
        } else {
          logger.log(
            `${this.constructor.name}: Replacing HTMLWebpackPlugin build hash has been skipped, required options not found`
          );
        }
      } catch (error) {
        logger.log(
          `${this.constructor.name}: Could not replace hash content in outputPath ${this.outputPath}:`,
          error
        );
      }
    });
  }
}

module.exports = WorkerPreloadPlugin;
