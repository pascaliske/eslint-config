import { rules, typescript, Severity } from '../rules'

export default {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint'],
    rules: { ...rules, ...typescript },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': [
                    Severity.Warning,
                    {
                        allowExpressions: true,
                    },
                ],
            },
        },
    ],
}
