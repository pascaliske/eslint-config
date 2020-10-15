import { rules, typescript } from '../rules'

export default {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint'],
    rules: { ...rules, ...typescript },
}
