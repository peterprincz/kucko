module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
                fadeInFromLeft: "fadeInFromLeft 1s ease-in forwards",
                fadeInFromRight: "fadeInFromRight 1s ease-in forwards",
                fadeInFromBottom: "fadeInFromBottom 1s ease-in forwards",
                activeToInteractive: "activeToInteractive 6s linear infinite"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                },
                fadeInFromLeft: {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-40px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                },
                fadeInFromRight: {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(40px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                },
                fadeInFromBottom: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(80px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                },
                activeToInteractive: {
                    "0%": {
                        backgroundColor: "rgb(var(--tw-interactive) / var(--tw-bg-opacity));"
                    },
                    "50%": {
                        backgroundColor: "rgb(var(--tw-active) / var(--tw-bg-opacity));"
                    },
                    "100%": {
                        backgroundColor: "rgb(var(--tw-interactive) / var(--tw-bg-opacity));"
                    }
                }
            }
        }
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}