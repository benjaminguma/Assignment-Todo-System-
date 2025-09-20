import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: {
                    DEFAULT: { value: "#75C5C1" },
                    50: { value: "#E9F5F7" },
                },
                cusGrey: {
                    50: { value: "#F7F7F7" },
                    100: { value: "#F5F5F5" },
                    200: { value: "#BAC1CC" },
                    300: { value: "#6C7278" },
                    400: { value: "#BAC1CC" },
                    500: { value: "464B50" }
                },
                cusBlu: {
                    "50": { value: "#CDD6E9" }
                },

            },
            fonts: {
                heading: { value: `'Plus Jakarta Sans', sans-serif` },
                body: { value: `'Plus Jakarta Sans', sans-serif` },
            },
            fontSizes: {
                xs: { value: "12px" },
                sm: { value: "13px" },
                base: { value: "14px" },
                md: { value: "16px" },
                lg: { value: "30px" },
            }
        },
        semanticTokens: {
            colors: {
                pri: { value: "green" },
                bg: { value: { base: "#fff", } },
                bg1: { value: { base: "#F5F5F5", } },
                fg: { value: { base: "#464B50", } },
                fg1: { value: { base: "#000", } },
                bordl: { value: { base: "colors.cusBlu.50" } }
            },

        },

    },
})




export default createSystem(defaultConfig, config,)



