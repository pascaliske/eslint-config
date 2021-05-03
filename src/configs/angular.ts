import { rules, typescript, angular } from '../rules'

export default {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@angular-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@angular-eslint'],
    rules: { ...rules, ...typescript, ...angular },
    reportUnusedDisableDirectives: true,
    overrides: [
        {
            files: ['*.component.ts'],
            extends: ['plugin:@angular-eslint/template/process-inline-templates'],
        },
    ],
}
