module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        fontFamily: {
            'cursive': ['handwriting']
        },
        extend: {
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
                fadeInFromLeft: "fadeInFromLeft 1s ease-in forwards",
                fadeInFromRight: "fadeInFromRight 1s ease-in forwards",
                fadeInFromBottom: "fadeInFromBottom 1s ease-in forwards",
                activeToInteractive: "activeToInteractive 6s linear infinite",
                interactiveToSecondary: "interactiveToSecondary  2s linear infinite",
                waves: "waves 5s cubic-bezier(.55,.5,.45,.5) infinite",
                slowSpin: "slowSpin 5s linear infinite",
                animatedgradient: "animatedgradient 3s ease alternate infinite"
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
                },
                interactiveToSecondary: {
                    "0%": {
                        backgroundColor: "rgb(var(--tw-secondary) / var(--tw-bg-opacity));"
                    },
                    "50%": {
                        backgroundColor: "rgb(var(--tw-interactive) / var(--tw-bg-opacity));"
                    },
                    "100%": {
                        backgroundColor: "rgb(var(--tw-secondary) / var(--tw-bg-opacity));"
                    }
                },
                waves: {
                    "0%": {
                        transform: "translate3d(-90px, 0, 0)"
                    },
                    "100%": {
                        transform: "translate3d(85px, 0, 0)"
                    }
                },
                slowSpin: {
                    "0%": {
                        transform: "rotate(0deg)"
                    },
                    "25%": {
                        transform: "rotate(180deg)"
                    },
                    "100%": {
                        transform: "rotate(180deg)"
                    }
                },
                animatedgradient: {
                    "0%": {
                        backgroundPosition: "0% 50%"
                    },
                    "50%": {
                        backgroundPosition: "100% 50%"
                    },
                    "100%": {
                        backgroundPosition: "0% 50%"
                    }
                }
            }
        }
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}