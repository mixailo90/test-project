module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:react-hooks/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react/recommended',
      'prettier'
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  };
  