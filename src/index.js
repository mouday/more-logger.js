const { console_ } = require("./console_");

/**
 * 工厂方法
 * disabled: boolean 是否禁用
 *      true:  返回console_, 不打印日志
 *      false: 返回console, 正常打印日志
 */
function getLogger(config = null) {
  if (config && config.disabled) {
    return console_;
  } else {
    return console;
  }
}

module.exports = {
  getLogger,
};
