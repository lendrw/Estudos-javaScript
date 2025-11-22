/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const { pathsToModuleNameMapper } = require('ts-jest')

const tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf-8'))

module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testRegex: '.*\\.int-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(@faker-js/faker)/)',
  ],
}