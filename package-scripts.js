const { series, rimraf } = require("nps-utils");

module.exports = {
  scripts: {
    "start": {
      "server": "cross-env NODE_ENV=development ts-node --project tsconfig.development.json server.ts",
      "server:tunnel": "cross-env NODE_ENV=development ENABLE_TUNNEL=true ts-node --project tsconfig.development.json server.ts"
    },
    "test": {
      "default": "NODE_ENV=test jest --coverage",
      "watch": "NODE_ENV=test jest --watchAll"
    },
    "vet": "npmvet",
    "clean": rimraf("dist")
  }
};
