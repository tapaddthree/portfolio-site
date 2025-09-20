const { FlatCompat } = require('@eslint/eslintrc');
// Provide the ESLint built-in configs to satisfy FlatCompat's requirements.
// @eslint/js exports the eslint 'recommended' and 'all' shareable configs.
const { configs: eslintJsConfigs } = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJsConfigs.recommended,
  allConfig: eslintJsConfigs.all,
});

module.exports = [
  // ensure build artifacts and node_modules are ignored before other configs
  { ignores: ['dist/**', 'dist', 'node_modules', '.eslintrc.cjs', 'eslint.config.cjs'] },
  // load legacy shareable configs and plugin configs
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ),
  // project specific overrides and language options
  {
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: { browser: 'readonly' }
    },
    plugins: { 'react-refresh': require('eslint-plugin-react-refresh') },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
];
