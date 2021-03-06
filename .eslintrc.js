module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['jsx-a11y'],
  extends: [
    'react-app',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-prototype-builtins': 'off',
    'react/destructuring-assignment': 'warn',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
