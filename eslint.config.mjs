import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'], // Include .ts files
    ignores: ['node_modules/', 'dist/'], // Add ignored directories here
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      // Enforce semicolons at the end of statements
      'semi': ['error', 'always'],
      // Disallow unnecessary semicolons
      'no-extra-semi': 'error',
    },
  },
];