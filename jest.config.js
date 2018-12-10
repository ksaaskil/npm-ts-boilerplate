module.exports = {
    "roots": [
      "<rootDir>/"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "coverageReporters": [
      "cobertura",
      "html"
    ],
    "reporters": [ "default", "jest-junit" ],
    "collectCoverageFrom": [
      "pages/**/*.ts",
      "lib/**/*.ts",
      "components/**/*.ts",
      "server/**/*.ts",
      //
      "pages/**/*.tsx",
      "lib/**/*.tsx",
      "components/**/*.tsx",
      "server/**/*.tsx",
    ],
  }