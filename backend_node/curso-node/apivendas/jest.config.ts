import fs from 'fs'
import { pathsToModuleNameMapper } from 'ts-jest'

const tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf-8'))

export default {
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
}
