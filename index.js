const keys = [
  "PROJECT_DOMAIN",
  "PROJECT_ID",
  "GLITCH_SHARED_INCLUDES_LEGACY_CLS",
  "PROJECT_NAME"
];

const files = [".env", ".git", ".glitch-assets", ".glitchdotcom.json"];

const fs = require("fs");
module.exports =
  process.env.PWD === "/app" &&
  keys.reduce(function(total, key) {
    return total + (!!process.env[key] ? 1 : 0);
  }, 0) === keys.length &&
  files.reduce(function(total, file) {
    return total + (fs.existsSync("/app/" + file) ? 1 : 0);
  }, 0) === files.length;


//*/
