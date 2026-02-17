// jest.config.cjs
module.exports = {
  projects: [
    // ======================
    // Unit / React tests
    // ======================
    {
      displayName: 'unit',
      testEnvironment: 'jest-environment-jsdom',

      transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },

      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },

      moduleFileExtensions: ['js', 'jsx'],

      setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

      testMatch: [
        '<rootDir>/src/__tests__/*.test.js',
        '<rootDir>/src/features/*.test.js',
      ],
    },

    // ======================
    // E2E Puppeteer
    // ======================
    {
      displayName: 'e2e',
      testEnvironment: 'node',

      transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },

      moduleFileExtensions: ['js', 'jsx'],

      testMatch: ['<rootDir>/src/e2e/**/*.test.js'],
    },
  ],
};
