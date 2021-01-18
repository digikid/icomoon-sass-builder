const { promises: fs } = require(`fs`);
const chalk = require(`chalk`);

module.exports = (gulp, plugins, config) => {
    return async done => {
        try {
            const json = await fs.readFile(`${config.paths.input}/selection.json`, `utf8`, (e, data) => data);

            if (config.debug) {
                console.log(`${chalk.bold(`Запуск конвертации...`)}`);
            };

            (async () => {
                const buildSass = cb => {
                    gulp.src(`${config.paths.input}/selection.json`)
                        .pipe(plugins.icomoonBuilder(config.templateType))
                        .pipe(plugins.rename(config.fileName))
                        .pipe(gulp.dest(config.paths.output))
                        .on(`end`, cb);
                };

                gulp.series(buildSass)(done);

                if (config.debug) {
                    console.log(chalk.bold(`Конвертация успешно завершена.`));
                };
            })();

        } catch(e) {
            if (config.debug) {
                console.log(`${chalk.bold(`Папка пуста, распакуйте файлы Icomoon в директорию ${chalk.italic.bgWhiteBright(config.paths.input)}`)}`);
            };

            done();
        };
    };
};
