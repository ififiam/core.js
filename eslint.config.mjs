import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    // 빨간줄을 노란줄(warn)으로 변경
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
