/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./index.html"],

theme: {
    extend: {
        colors: {
            terracotta: {
                50:  "#fdf4f0",
                100: "#f9e5dc",
                200: "#f2c9b9",
                300: "#e9a78f",
                400: "#df8066",
                500: "#d05f45",
                600: "#b84b35",
                700: "#963c2d",
                800: "#793328",
                900: "#632e27",
                950: "#351512",
            },

            warm: {
                cream: "#fff8ed",
                sand: "#e8c9a8",
                peach: "#f4b183",
                coral: "#e76f51",
                rust: "#a9472b",
                brown: "#5c3b2e",
                chocolate: "#38251f",
            }
        },

        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Georgia", "serif"],
        },
    },
},

plugins: [],


};