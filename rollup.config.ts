import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

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
        terser({
            mangle: true,
            format: { comments: false },
        }),
    ],
    watch: {
        clearScreen: false,
    },
})
