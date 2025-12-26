/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    testMatch: ['**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/generated/**',
        '!src/index.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: {
                    module: 'ESNext',
                    moduleResolution: 'bundler',
                    verbatimModuleSyntax: false,
                },
            },
        ],
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    testTimeout: 10000,
};
