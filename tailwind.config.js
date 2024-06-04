/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#DC5F00",
                secondary: "#373A40",
                "dark-gray": "#686D76",
                "light-gray": "#EEEEEE",
            },
        },
    },
    plugins: [],
};
