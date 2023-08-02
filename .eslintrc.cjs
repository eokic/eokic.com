/*

  Production frontend
  TODO

  Development frontend
  TODO

*/
module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    worker: true,
    node: true,
  },

  // globals: {
  //   App: 'writable',
  //   emitter: 'readonly',
  //   transl: 'writeable',
  //   Time: 'readonly',
  //   dayjs: 'readonly',
  //   i18n: 'readonly',
  //   uuid: 'readonly',
  //   store: 'readonly',
  // },

  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'airbnb-base',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },

  plugins: [
    'import',
    '@typescript-eslint',
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue', '.astro'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Buggy behaviour
    'prefer-template': 'off',

    // Imports
    'no-duplicate-imports': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'off',
    'import/first': 'off',

    // VUEX
    'no-param-reassign': ['warn'],


    /* --------------------------------------------------------------------------
      CODE STYLE
    -------------------------------------------------------------------------- */
    camelcase: 'warn',
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    semi: ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1,
      outerIIFEBody: 1,
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      ArrayExpression: 1,
      FunctionDeclaration: {
        body: 1,
        parameters: 1,
      },
      FunctionExpression: {
        body: 1,
        parameters: 1,
      },
      offsetTernaryExpressions: true,
      ignoreComments: true,
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
    }],
    'no-spaced-func': 'off',
    'func-call-spacing': ['warn', 'never'],
    'function-paren-newline': 'off',
    'padding-line-between-statements': ['warn',
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'multiline-expression',
        next: '*',
      },

      // {
      //   blankLine: 'always',
      //   prev: 'block-like',
      //   next: '*',
      // },
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'implicit-arrow-linebreak': 'off',
    'space-before-function-paren': ['error', 'always'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    'object-curly-spacing': ['error', 'always', {
      // arraysInObjects: false,
      // objectsInObjects: false,
    }],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'array-bracket-spacing': ['error', 'never'],
    'padded-blocks': 'off',
    curly: ['error', 'multi-or-nest'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'no-underscore-dangle': 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['-=*'] }],
    'lines-around-comment': ['warn', {
      beforeLineComment: true,
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
    }],
    'no-confusing-arrow': ['error', {
      onlyOneSimpleParam: true,
    }],
    'key-spacing': ['error', {
      singleLine: {
        beforeColon: false,
        afterColon: true,
      },
      multiLine: {
        beforeColon: false,
        afterColon: true,
      },
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],


    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
    }],


    /* --------------------------------------------------------------------------
      GOOD CODING PRACTICES
    -------------------------------------------------------------------------- */
    'no-implicit-globals': ['error'],
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],
    yoda: 2,
  },


  overrides: [


    /* --------------------------------------------------------------------------
      TYPESCRIPT
    -------------------------------------------------------------------------- */
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'spaced-comment': ['error', 'always', {
          markers: ['/'],
        }],
      },
    },


    /* --------------------------------------------------------------------------
      ASTRO
    -------------------------------------------------------------------------- */
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      extends: [
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended',
      ],
      rules: {
        //
      },
    },


    /* --------------------------------------------------------------------------
      VUE
    -------------------------------------------------------------------------- */
    {
      files: ['*.vue'],
      plugins: [
        'import',
        '@typescript-eslint',
        'vue',
      ],
      extends: [
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript/recommended',
      ],
      rules: {
        indent: 'off', // eslint indent conflicts with vue indent rules, so it has to be disabled for .vue files
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
        }],
        'vue/html-indent': ['error', 2, {
          baseIndent: 1,
          alignAttributesVertically: false,
        }],

        'prefer-destructuring': ['warn', {
          VariableDeclarator: {
            array: true,
            object: false, // disabled because it forces it on props which breaks reactivity
          },
          AssignmentExpression: {
            array: true,
            object: true,
          },
        }, {
          enforceForRenamedProperties: false,
        }],
        'no-unused-vars': ['warn', { varsIgnorePattern: 'props' }],
        'func-call-spacing': 'off', // causes conflicts with Typescript e.g. defineProps

        'vue/component-api-style': ['error', ['script-setup']],
        'vue/html-quotes': ['error', 'single'],
        'vue/html-self-closing': ['error', {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
        }],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/v-on-event-hyphenation': ['error', 'never'],
        'vue/first-attribute-linebreak': ['error', {
          singleline: 'beside',
          multiline: 'below',
        }],
        'vue/html-closing-bracket-newline': ['error', {
          singleline: 'never',
          multiline: 'always',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always',
        }],
        'vue/max-attributes-per-line': ['error', {
          singleline: { max: 2 },
          multiline: { max: 1 },
        }],
        'vue/multi-word-component-names': 'off',
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/define-emits-declaration': ['error', 'type-based'],
        'vue/next-tick-style': ['error', 'promise'],
        'vue/component-tags-order': ['error', {
          order: [
            'template',
            'script[setup]',
            'script',
            'style',
          ],
        }],
        'vue/attributes-order': ['error', {
          order: [
            'DEFINITION',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'LIST_RENDERING',
            ['UNIQUE', 'SLOT'],
            'GLOBAL',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        }],
        'vue/v-for-delimiter-style': ['warn', 'in'],
        'vue/prefer-true-attribute-shorthand': ['warn'],
        'vue/no-duplicate-attr-inheritance': ['error'],
        'vue/no-required-prop-with-default': ['error'],
        'vue/no-ref-object-destructure': ['error'],
        'vue/no-useless-v-bind': ['error'],
        'vue/no-v-html': ['error'],
        'vue/no-v-text': ['error'],
      },
    },
  ],
}
