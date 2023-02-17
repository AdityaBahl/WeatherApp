/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/pages/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],

    theme: {
        spacing: {
            '1': '8px',
            '2': '12px',
            '3': '16px',
            '4': '24px',
            '5': '32px',
            '6': '48px',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',

        }
    }
}