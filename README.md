# mat-delay

[![npm version](https://badge.fury.io/js/mat-delay.svg)](http://badge.fury.io/js/mat-delay)

用于模拟低网速情况

## Installation

```sh
npm install --save-dev mat-delay
```

## Usage

```javascript
var mat   = require('mat');
var delay = require('mat-delay');

mat.task('default', function () {
  mat.use(delay({
    delay: 1
  }));
})
```

## Options

- `delay`
  
  请求需要delay的秒数，单位秒