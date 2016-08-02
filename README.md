# hexo-hanzi

[![Build Status](https://travis-ci.org/lujjjh/hexo-hanzi.svg?branch=master)](https://travis-ci.org/lujjjh/hexo-hanzi)
[![NPM version](https://img.shields.io/npm/v/hexo-hanzi.svg)](https://www.npmjs.com/package/hexo-hanzi)

Postrender your posts with [hanzi (漢字標準格式)][hanzi].

## Installation

This package requires Cairo to be installed. For more details, see [canvas][node-canvas-installation]

After installing the dependencies, you can simply run

    $ npm install --save hexo-hanzi

## Usage

Note that the stylesheet file is still a must to style your page correctly although the script file is not.

You may import it by adding

```html
<link rel="stylesheet" href="path/src/css/han.min.css">
```

to the `<head>` in your layout.

Alternatively, you may also use a CDN version such as

```html
<link rel="stylesheet" media="all" href="//cdnjs.cloudflare.com/ajax/libs/Han/3.2.7/han.min.css">
```

Finally, delete the database and regenerate files

    $ hexo clean && hexo generate


[hanzi]: https://css.hanzi.co/
[node-canvas-installation]: https://github.com/Automattic/node-canvas#installation
