# hexo-hanzi

[![Build Status](https://travis-ci.org/lujjjh/hexo-hanzi.svg?branch=master)](https://travis-ci.org/lujjjh/hexo-hanzi)
[![NPM version](https://img.shields.io/npm/v/hexo-hanzi.svg)](https://www.npmjs.com/package/hexo-hanzi)

[English](README-en.md)

使用[汉字标准格式][hanzi]后渲染文章。

## 安装

    $ npm install --save hexo-hanzi

## 用法

为主题布局页面的 `<html>` 增加 lang 属性，比如网页内容以简体中文为主

```html
<html lang="zh-Hans-CN">
```

在主题布局页面的 `<head>` 中加入“汉字标准格式”的样式

```html
<link rel="stylesheet" href="path/src/css/han.min.css">
```

或者，你也可以使用 CDN 版本，比如

```html
<link href="//cdn.bootcss.com/Han/3.3.0/han.min.css" rel="stylesheet">
```

在重新生成之前，你需要清除缓存，以确保重新渲染文章

    $ hexo clean


[hanzi]: https://css.hanzi.co/
[node-canvas-installation]: https://github.com/Automattic/node-canvas#installation
