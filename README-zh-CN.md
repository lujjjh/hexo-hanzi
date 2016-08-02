# hexo-hanzi

[![Build Status](https://travis-ci.org/lujjjh/hexo-hanzi.svg?branch=master)](https://travis-ci.org/lujjjh/hexo-hanzi)
[![NPM version](https://img.shields.io/npm/v/hexo-hanzi.svg)](https://www.npmjs.com/package/hexo-hanzi)

[English](README.md)

使用[汉字标准格式][hanzi]后渲染文章。

## 安装

安装这个包之前，你需要先安装 Cario。详情请参见 [canvas][node-canvas-installation]。

安装完依赖之后，执行

    $ npm install --save hexo-hanzi

## 用法

在你的布局页面的 `<head>` 区域中加入

```html
<link rel="stylesheet" href="path/src/css/han.min.css">
```

来引用汉字标准格式的 CSS 文件。

或者，你也可以使用 CDN 版本，比如

```html
<link rel="stylesheet" media="all" href="//cdnjs.cloudflare.com/ajax/libs/Han/3.2.7/han.min.css">
```

在重新生成之前，你很可能需要清除缓存，以确保重新渲染文章

    $ hexo clean


[hanzi]: https://css.hanzi.co/
[node-canvas-installation]: https://github.com/Automattic/node-canvas#installation
