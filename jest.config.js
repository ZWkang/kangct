module.exports = {
    setupFiles: ['./jest.setup.js'],
    rootDir: '',
    testMatch: ['<rootDir>/__tests__/*.test.js','<rootDir>/__tests__/**/*.test.js'],
    coverageDirectory: '<rootDir>/.coverage/',
    collectCoverageFrom: [
      '**/*.js',
      '!**/node_modules/**',
      '!**/*.test.js',
    ],
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'text-summary'],
    moduleDirectories: [
      'node_modules',
      '<rootDir>',
    ],
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        "^.+\\.[(sc)|(c)]ss$": "<rootDir>/__test__/__mocks__/css-transform.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__test__/__mocks__/fileMock.js",
    },
    moduleNameMapper: {
    //   '\\.(css|less|s(c|a)ss)$': '<rootDir>/../__mocks__/style.js',
    //   'services(.*)$': '<rootDir>/services$1',
        "^react$": "<rootDir>/node_modules/react",
    },
    testURL: "http://localhost/",
  };