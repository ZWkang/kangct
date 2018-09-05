module.exports = {
    setupFiles: ['./jest.setup.js'],
    rootDir: '',
    testMatch: ['<rootDir>/__test__/*.test.js','<rootDir>/__test__/**/*.test.js'],
    coverageDirectory: '<rootDir>/.coverage/',
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/*.{config,setup}.js',
      '!**/node_modules/**',
      '!**/*.test.js',
      '!dist/*',
    ],
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'text-summary'],
    moduleDirectories: [
      'node_modules',
      '<rootDir>',
    ],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      },
    },
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
    //   '\\.(css|less|s(c|a)ss)$': '<rootDir>/../__mocks__/style.js',
    //   'services(.*)$': '<rootDir>/services$1',
        "^react$": "<rootDir>/node_modules/react",
        "^.+\\.scss$": "<rootDir>/__test__/__mocks__/css-transform.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__test__/__mocks__/fileMock.js",
        "^@app(.*)$": "<rootDir>/src/components$1",
    },
    testURL: "http://localhost/",
  };