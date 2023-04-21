module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
  ],
  'rules': {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'max-len': ['error', 120, { 'ignoreStrings': true }],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react/prop-types': 0,
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'comma-dangle': [2, 'always-multiline'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          // React
          [
            '^react',
          ],
          // Packages.
          [
            '^@?\\w',
          ],
          // Side effect imports.
          [
            '^\\u0000',
          ],
          // Api
          [
            '^(?!@).*api.*$',
          ],
          // Components
          [
            '^\\.(?!@).*components.*$',
          ],
          // Hooks
          [
            '^(?!@).*hooks.*$',
          ],
          // Relative imports, put parent imports last
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
          ],
          // Folders imports.
          [
            '.*partials.*',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
  },
};
