// eslint.config.js
import nx from '@nx/eslint-plugin';
import { config as eslintConfig } from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

// Nx flat base rules
const nxConfigs = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
];

// Angular + TS rules
const angularTsConfig = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslintConfig.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      'no-debugger': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'on',
      '@typescript-eslint/no-empty-function': 'off',
      '@angular-eslint/prefer-inject': 'warn',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
);

// Merge Nx + Angular TS configs
export default [
  ...nxConfigs,
  {
    ignores: ['**/dist'],
  },
  angularTsConfig,
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {
      // Any overrides or additional rules can go here
    },
  },
];
