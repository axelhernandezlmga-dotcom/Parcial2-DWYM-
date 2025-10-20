module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-nested-ternary': 'error',
    complexity: ['warn', 6],
    'react/jsx-no-useless-fragment': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
