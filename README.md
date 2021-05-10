# more-logger

日志打印

## 功能：

1、在不同环境下显示或不显示调试日志

```
development： 显示
production：  不显示
```

2、打印的日志带有输出文件位置信息

## install

```
npm i more-logger -S
```

## Demo

```js
const { getLogger } = require("more-logger");

/**
 * disabled: boolean 是否禁用
 *      true:  返回console_, 不打印日志
 *      false: 返回console,  正常打印日志，默认
 */
const disabled = process.env.NODE_ENV == "production";
const logger = getLogger(disabled);

logger.log("log");
logger.debug("log");
```

日志输出如下

```
log main.js:351
log router.js:353
```

## 支持的方法

```js
log() {},
debug() {},
info() {},
warn() {},
error() {},
```
