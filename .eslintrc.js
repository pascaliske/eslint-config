module.exports = {
    root: true,
    extends: './typescript.js',
    parserOptions: {
        project: `${__dirname}/tsconfig.json`,
        createDefaultProgram: true,
    },
    env: {
        node: true,
    },
}
