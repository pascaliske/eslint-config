import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => ({
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            file: 'dist/index.js',
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
