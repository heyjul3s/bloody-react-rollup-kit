module.exports = {
  // projects: [
  //   {
  //     displayName: 'lint',
  //     runner: 'jest-runner-eslint',
  //     testMatch: ['<rootDir>/**/*.js'],
  //   },
  // ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx, js,jsx}',
    '!<rootDir>/.storybook/*',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleDirectories: ['node_modules', 'bower_components'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>config/enzyme.config.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)$',
  verbose: false,
};
