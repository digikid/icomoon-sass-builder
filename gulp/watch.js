const chalk = require(`chalk`);

module.exports = (gulp, plugins, config) => {
    return done => {
        if (config.debug) {
            console.log(`${chalk.bold(`Запуск слежения за файлами...`)}`);
        };

        const watchers = [{
            name: `convert`,
            path: `${config.paths.input}/**`,
            tasks: [`convert`]
        }];

        watchers.forEach(watcher => gulp.watch(watcher.path, gulp.series(...watcher.tasks)));
    };
};