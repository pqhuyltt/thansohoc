module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                txtGradient:
                    'linear-gradient(45deg, #F62682 -4.45%, #6F5CF1 104.12%);',
            },
        },
    },
    plugins: [],
}
