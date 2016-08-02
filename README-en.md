# hexo-hanzi

[![Build Status](https://travis-ci.org/lujjjh/hexo-hanzi.svg?branch=master)](https://travis-ci.org/lujjjh/hexo-hanzi)
[![NPM version](https://img.shields.io/npm/v/hexo-hanzi.svg)](https://www.npmjs.com/package/hexo-hanzi)

[中文](README.md)

Postrender your posts with [hanzi (漢字標準格式)][hanzi].

## Installation

This package requires Cairo to be installed. For more details, see [canvas][node-canvas-installation].

After installing the dependencies, you can simply run

    $ npm install --save hexo-hanzi

## Usage

Add `lang` attribute to the `<html>` element in your layout, to specify the main language of your site.

```html
<html lang="zh-Hans-CN">
```

Attach CSS rules of hanzi by putting

```html
<link rel="stylesheet" href="path/src/css/han.min.css">
```

in the `<head>` section in your layout.

Alternatively, you may also use a CDN version such as

```html
<link rel="stylesheet" media="all" href="//cdnjs.cloudflare.com/ajax/libs/Han/3.2.7/han.min.css">
```

Before regenerating files, you probably want to clear the cache so that posts can be rerendered properly.

    $ hexo clean


[hanzi]: https://css.hanzi.co/
[node-canvas-installation]: https://github.com/Automattic/node-canvas#installation
