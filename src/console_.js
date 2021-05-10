/**
 * 生产环境不显示任何调试信息
 */
const console_ = {
  log() {},
  debug() {},
  info() {},
  warn() {},
  error() {},
};

module.exports = {
  console_,
};
