"use client"
import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {},
        },
    },
})

const system = createSystem(defaultConfig, config)
export default function ChakraUiProvider(props: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {props.children}
            </ThemeProvider>
        </ChakraProvider>
    )
}