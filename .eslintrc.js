module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  plugins: ["simple-import-sort"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'semi': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'no-restricted-imports': ['error', {
      patterns: [
        {
          group: ['../*'],
          message: 'Avoid using relative paths with "..". Please use aliases or absolute paths instead.'
        }
      ]
    }],
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_"
    }
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/newline-after-import": "off",
  },
};
