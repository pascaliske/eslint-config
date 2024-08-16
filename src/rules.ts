/**
 * Severity
 */
export const enum Severity {
    Off,
    Warning,
    Error,
}

/**
 * Options
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Options<T = any> =
    | Severity
    | [Severity, string]
    | [Severity, Record<string, T>]
    | [Severity, string, Record<string, T>]

/**
 * Base Rules
 */
export const rules: Record<string, Options> = {
    /**
     * Possible Errors
     * @see https://eslint.org/docs/rules/#possible-errors
     */
    'for-direction': Severity.Warning,
    'getter-return': [Severity.Error, { allowImplicit: true }],
    'no-async-promise-executor': Severity.Error,
    'no-await-in-loop': Severity.Error,
    'no-compare-neg-zero': Severity.Error,
    'no-cond-assign': Severity.Error,
    'no-console': [Severity.Error, { allow: ['info', 'warn', 'error'] }],
    'no-constant-condition': Severity.Error,
    'no-control-regex': Severity.Error,
    'no-debugger': Severity.Error,
    'no-dupe-args': Severity.Error,
    'no-dupe-else-if': Severity.Error,
    'no-dupe-keys': Severity.Error,
    'no-duplicate-case': Severity.Error,
    'no-empty': Severity.Error,
    'no-empty-character-class': Severity.Error,
    'no-ex-assign': Severity.Error,
    'no-extra-boolean-cast': Severity.Warning,
    'no-extra-semi': Severity.Error,
    'no-func-assign': Severity.Error,
    'no-import-assign': Severity.Error,
    'no-inner-declarations': Severity.Error,
    'no-invalid-regexp': Severity.Error,
    'no-irregular-whitespace': Severity.Error,
    'no-loss-of-precision': Severity.Error,
    'no-misleading-character-class': Severity.Error,
    'no-obj-calls': Severity.Error,
    'no-promise-executor-return': Severity.Warning,
    'no-prototype-builtins': Severity.Warning,
    'no-regex-spaces': Severity.Error,
    'no-setter-return': Severity.Error,
    'no-sparse-arrays': Severity.Warning,
    'no-template-curly-in-string': Severity.Warning,
    'no-unexpected-multiline': Severity.Error,
    'no-unreachable': Severity.Error,
    'no-unreachable-loop': Severity.Error,
    'no-unsafe-finally': Severity.Error,
    'no-unsafe-negation': Severity.Error,
    'no-useless-backreference': Severity.Error,
    'require-atomic-updates': Severity.Error,
    'use-isnan': Severity.Error,
    'valid-typeof': Severity.Error,

    /**
     * Best Practices
     * @see https://eslint.org/docs/rules/#best-practices
     */
    'accessor-pairs': [Severity.Error, { enforceForClassMembers: false }],
    'array-callback-return': Severity.Error,
    'block-scoped-var': Severity.Error,
    'class-methods-use-this': Severity.Off,
    'consistent-return': Severity.Off,
    curly: Severity.Error,
    'default-case': Severity.Off,
    'default-case-last': Severity.Error,
    'dot-location': [Severity.Error, 'property'],
    'dot-notation': Severity.Error,
    eqeqeq: [Severity.Error, 'always'],
    'grouped-accessor-pairs': Severity.Error,
    'guard-for-in': Severity.Error,
    'max-classes-per-file': Severity.Error,
    'no-alert': Severity.Error,
    'no-caller': Severity.Error,
    'no-case-declarations': Severity.Warning,
    'no-constructor-return': Severity.Error,
    'no-div-regex': Severity.Error,
    'no-else-return': Severity.Error,
    'no-empty-function': [Severity.Error, { allow: ['arrowFunctions', 'constructors'] }],
    'no-eq-null': Severity.Error,
    'no-eval': Severity.Error,
    'no-extend-native': Severity.Error,
    'no-extra-bind': Severity.Error,
    'no-extra-label': Severity.Warning,
    'no-fallthrough': Severity.Error,
    'no-floating-decimal': Severity.Error,
    'no-global-assign': Severity.Error,
    'no-implicit-coercion': [Severity.Error, { allow: ['!!'] }],
    'no-implicit-globals': Severity.Error,
    'no-implied-eval': Severity.Error,
    'no-iterator': Severity.Error,
    'no-labels': Severity.Error,
    'no-lone-blocks': Severity.Error,
    'no-loop-func': Severity.Error,
    'no-multi-spaces': Severity.Error,
    'no-multi-str': Severity.Error,
    'no-new': Severity.Warning,
    'no-new-func': Severity.Error,
    'no-new-wrappers': Severity.Error,
    'no-octal': Severity.Error,
    'no-octal-escape': Severity.Error,
    'no-proto': Severity.Error,
    'no-return-assign': Severity.Error,
    'no-return-await': Severity.Error,
    'no-script-url': Severity.Error,
    'no-self-assign': [Severity.Error, { props: false }],
    'no-self-compare': Severity.Error,
    'no-sequences': Severity.Error,
    'no-throw-literal': Severity.Error,
    'no-unmodified-loop-condition': Severity.Error,
    'no-unused-expressions': Severity.Error,
    'no-unused-labels': Severity.Error,
    'no-useless-call': Severity.Error,
    'no-useless-catch': Severity.Error,
    'no-useless-concat': Severity.Error,
    'no-useless-escape': Severity.Error,
    'no-useless-return': Severity.Error,
    'no-void': Severity.Error,
    'no-warning-comments': Severity.Warning,
    'no-with': Severity.Error,
    'prefer-named-capture-group': Severity.Warning,
    'prefer-promise-reject-errors': Severity.Warning,
    'prefer-regex-literals': Severity.Warning,
    radix: [Severity.Error, 'always'],
    'require-await': Severity.Error,
    'vars-on-top': Severity.Error,
    'wrap-iife': Severity.Error,
    yoda: [Severity.Error, 'never'],

    /**
     * Strict Mode
     * @see https://eslint.org/docs/rules/#strict-mode
     */
    strict: Severity.Error,

    /**
     * Variables
     * @see https://eslint.org/docs/rules/#variables
     */
    'no-delete-var': Severity.Error,
    'no-label-var': Severity.Error,
    'no-restricted-globals': Severity.Error,
    'no-shadow-restricted-names': Severity.Error,
    'no-undef': [Severity.Error, { typeof: true }],
    'no-undef-init': Severity.Error,
    'no-undefined': Severity.Error,
    'no-use-before-define': Severity.Error, // ?

    /**
     * Stylistic Issues
     * @see https://eslint.org/docs/rules/#stylistic-issues
     */
    'array-bracket-newline': [Severity.Error, { multiline: true }],
    'array-bracket-spacing': Severity.Error,
    'block-spacing': Severity.Error,
    'brace-style': Severity.Error,
    camelcase: Severity.Error,
    'capitalized-comments': Severity.Off,
    'comma-dangle': [Severity.Error, 'always-multiline'],
    'comma-spacing': Severity.Error,
    'comma-style': Severity.Error,
    'computed-property-spacing': Severity.Error,
    'consistent-this': [Severity.Error, 'self'],
    'eol-last': Severity.Error,
    'func-call-spacing': Severity.Error,
    'func-names': [Severity.Error, 'never'],
    'func-style': [Severity.Error, 'declaration', { allowArrowFunctions: true }],
    'id-length': [Severity.Warning, { min: 2, exceptions: ['_', 'i', 'j', 'm', 'k', 'v', 'r'] }],
    'jsx-quotes': Severity.Error,
    'key-spacing': Severity.Error,
    'keyword-spacing': Severity.Error,
    'line-comment-position': Severity.Warning,
    'linebreak-style': Severity.Error,
    'lines-between-class-members': [Severity.Warning, 'always', { exceptAfterSingleLine: true }],
    'max-len': [
        Severity.Error,
        {
            code: 100,
            comments: 120,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignorePattern: '^import .+ from .+$',
        },
    ],
    'max-statements-per-line': Severity.Warning,
    'new-parens': Severity.Error,
    'newline-per-chained-call': [Severity.Error, { ignoreChainWithDepth: 3 }],
    'no-array-constructor': Severity.Error,
    'no-lonely-if': Severity.Error,
    'no-mixed-spaces-and-tabs': Severity.Error,
    'no-multi-assign': Severity.Error,
    'no-multiple-empty-lines': Severity.Error,
    'no-nested-ternary': Severity.Warning,
    'no-new-object': Severity.Error,
    'no-tabs': Severity.Error,
    'no-trailing-spaces': Severity.Error,
    'no-underscore-dangle': Severity.Error,
    'no-unneeded-ternary': Severity.Error,
    'no-whitespace-before-property': Severity.Error,
    'object-curly-spacing': [Severity.Error, 'always'],
    'one-var': [Severity.Error, 'never'],
    'operator-assignment': Severity.Warning,
    'prefer-exponentiation-operator': Severity.Warning,
    'prefer-object-spread': Severity.Warning,
    'quote-props': [Severity.Warning, 'as-needed'],
    quotes: [Severity.Error, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [Severity.Error, 'never', { beforeStatementContinuationChars: 'always' }],
    'space-before-blocks': Severity.Error,
    'space-before-function-paren': [
        Severity.Error,
        {
            named: 'never',
            anonymous: 'always',
            asyncArrow: 'always',
        },
    ],
    'space-in-parens': [Severity.Error, 'never'],
    'template-tag-spacing': Severity.Error,

    /**
     * ECMAScript 6
     * @see https://eslint.org/docs/rules/#ecmascript-6
     */
    'arrow-parens': [Severity.Error, 'as-needed'],
    'arrow-spacing': Severity.Error,
    'constructor-super': Severity.Error,
    'generator-star-spacing': Severity.Error,
    'no-class-assign': Severity.Error,
    'no-const-assign': Severity.Error,
    'no-dupe-class-members': Severity.Error,
    'no-duplicate-imports': Severity.Off,
    'no-new-symbol': Severity.Error,
    'no-this-before-super': Severity.Error,
    'no-useless-computed-key': Severity.Error,
    'no-useless-rename': Severity.Error,
    'no-var': Severity.Error,
    'object-shorthand': Severity.Error,
    'prefer-arrow-callback': Severity.Error,
    'prefer-const': Severity.Error,
    'prefer-destructuring': Severity.Error,
    'prefer-rest-params': Severity.Error,
    'prefer-spread': Severity.Error,
    'prefer-template': Severity.Error,
    'rest-spread-spacing': Severity.Error,
    'symbol-description': Severity.Error,
    'template-curly-spacing': Severity.Error,
}

/**
 * TypeScript Rules
 */
export const typescript: Record<string, Options> = {
    /**
     * Disabled ESLint basic rules.
     */
    'no-dupe-class-members': Severity.Off,

    /**
     * TypeScript Specifics
     * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
     */
    '@typescript-eslint/adjacent-overload-signatures': Severity.Error,
    '@typescript-eslint/array-type': Severity.Error,
    '@typescript-eslint/await-thenable': Severity.Error,
    '@typescript-eslint/ban-ts-comment': Severity.Error,
    '@typescript-eslint/ban-tslint-comment': Severity.Error,
    '@typescript-eslint/consistent-type-assertions': Severity.Error,
    '@typescript-eslint/explicit-function-return-type': Severity.Off,
    '@typescript-eslint/explicit-member-accessibility': Severity.Error,
    '@typescript-eslint/explicit-module-boundary-types': Severity.Off,
    '@typescript-eslint/member-ordering': [
        Severity.Error,
        {
            default: [
                // index signature
                'signature',

                // fields
                'static-field',
                'instance-field',
                'abstract-field',

                // constructors
                'constructor',

                // methods
                'static-method',
                'instance-method',
                'abstract-method',
            ],
        },
    ],
    '@typescript-eslint/method-signature-style': Severity.Error,
    '@typescript-eslint/no-dupe-class-members': Severity.Error,
    '@typescript-eslint/no-empty-interface': Severity.Warning,
    '@typescript-eslint/no-explicit-any': Severity.Warning,
    '@typescript-eslint/no-extra-non-null-assertion': Severity.Error,
    '@typescript-eslint/no-inferrable-types': Severity.Off,
    '@typescript-eslint/no-misused-new': Severity.Error,
    '@typescript-eslint/no-misused-promises': Severity.Error,
    '@typescript-eslint/no-parameter-properties': Severity.Off,
    '@typescript-eslint/no-require-imports': Severity.Error,
    '@typescript-eslint/no-this-alias': Severity.Error,
    '@typescript-eslint/no-unnecessary-type-arguments': Severity.Error,
    '@typescript-eslint/no-unnecessary-type-assertion': Severity.Error,
    '@typescript-eslint/no-unsafe-assignment': Severity.Off,
    '@typescript-eslint/no-unsafe-call': Severity.Off,
    '@typescript-eslint/no-unsafe-member-access': Severity.Off,
    '@typescript-eslint/no-unsafe-return': Severity.Off,
    '@typescript-eslint/no-unused-vars': Severity.Error,
    '@typescript-eslint/no-var-requires': Severity.Error,
    '@typescript-eslint/only-throw-error': Severity.Error,
    '@typescript-eslint/prefer-for-of': Severity.Error,
    '@typescript-eslint/prefer-includes': Severity.Warning,
    '@typescript-eslint/prefer-nullish-coalescing': Severity.Warning,
    '@typescript-eslint/prefer-optional-chain': Severity.Warning,
    '@typescript-eslint/prefer-readonly': Severity.Warning,
    '@typescript-eslint/prefer-string-starts-ends-with': Severity.Warning,
    '@typescript-eslint/prefer-ts-expect-error': Severity.Warning,
    '@typescript-eslint/restrict-plus-operands': Severity.Off,
    '@typescript-eslint/restrict-template-expressions': Severity.Off,
    '@typescript-eslint/triple-slash-reference': Severity.Error,
    '@typescript-eslint/unified-signatures': Severity.Warning,
    '@typescript-eslint/unbound-method': Severity.Off,
}

/**
 * Angular Rules
 */
export const angular: Record<string, Options> = {
    '@angular-eslint/directive-selector': [
        Severity.Error,
        {
            type: 'attribute',
            prefix: '',
            style: 'kebab-case',
        },
    ],
    '@angular-eslint/component-selector': [
        Severity.Error,
        {
            type: 'element',
            prefix: 'cmp',
            style: 'kebab-case',
        },
    ],
}
