/* Segunda possibilidade para  adicionar o o plugin Prettier , createRequire cria uma função similar ao 'require' que pode ser usada em módulos ESM
import { createRequire } from 'module';*/
import nx from '@nx/eslint-plugin';
// adicionei o plugin prettier para que o eslint possa formatar o código
import prettier from 'eslint-plugin-prettier/recommended';

/* import.meta.url determina o caminho do módulo e auxilia na resolução do módulo requerido
const require = createRequire(import.meta.url);
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');*/

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  prettier,
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
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
    // Override or add rules here
    rules: {},
  },
];
