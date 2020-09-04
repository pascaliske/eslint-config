import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { main } from './package.json'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => ({
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            exports: 'default',
            file: main,
        },
    ],
    plugins: [
        clear({
            targets: ['dist'],
            watch: true,
        }),
        typescript({
            typescript: require('typescript'),
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['rollup.config.ts'],
            },
        }),
        terser(),
    ],
    watch: {
        clearScreen: false,
    },
})
