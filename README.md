# icomoon-sass-builder

![GitHub release](https://img.shields.io/github/release/digikid/icomoon-scss-builder.svg)
[![dependencies Status](https://david-dm.org/digikid/icomoon-scss-builder/status.svg)](https://david-dm.org/digikid/icomoon-scss-builder)
[![devDependencies Status](https://david-dm.org/digikid/icomoon-scss-builder/dev-status.svg)](https://david-dm.org/digikid/icomoon-scss-builder?type=dev)

Автоматическая генерация проекта Icomoon в SASS / SCSS список.

## Содержание

- [Подготовка к работе](#start)
- [Запуск](#run)
- [Настройки](#config)

<a name="start"></a>

## Подготовка к работе

Для запуска проекта необходимо наличие [Node.js](https://nodejs.org/), установите его с [официального сайта](https://nodejs.org/).

Проект запускается с использованием последней версии [Gulp](https://gulpjs.com/). Перед началом работы убедитесь, что Gulp установлен с помощью команды:

```shell
gulp -v
```

Для установки Gulp воспользуйтесь командой:

```shell
npm install --global gulp-cli
```

Если ранее вы уже устанавливали Gulp глобально, удалите его ([подробнее](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)) и установите пакет [gulp-cli](https://www.npmjs.com/package/gulp-cli):

```shell
npm rm --global gulp
npm install --global gulp-cli
```

После установки Gulp выполните установку необходимых зависимостей:

```shell
npm ci
```

<a name="build"></a>

## Запуск

1. Поместите все файлы из zip-архива Icomoon в директорию `/icomoon`.

2. После этого воспользуйтесь командами:

```shell
# Перейдите в папку с проектом
cd /path/to/icomoon-sass-builder/

# Запустите конвертацию
gulp
```

<a name="config"></a>

## Настройки

Настройки проекта находятся в файле `./config.js`.

Параметр       | Тип     | По умолчанию     | Описание
-------------- | --------| ---------------- | -------------------------------------------------------------------------
fileName       | string  | `_icomoon.scss`  | Имя выходного файла
templateType   | string  | `map`            | Тип выходного файла. Возможные значения: `map`, `var` или `svg`
paths          | object  | -                | Пути для входных и выходных файлов
debug          | boolean | true             | Режим отладки

## Лицензия

[The MIT License (MIT)](LICENSE)
