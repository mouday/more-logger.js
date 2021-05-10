const { getLogger } = require("more-logger");

const disabled = process.env.NODE_ENV == "production";
const logger = getLogger(disabled);

logger.log("log");
logger.debug("log");
