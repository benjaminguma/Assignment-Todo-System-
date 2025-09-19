"use client"
import theme from "@/components/theme"
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider } from "@chakra-ui/react"
export default function ChakraUiProvider(props: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={theme}>
            <ColorModeProvider>
                {props.children}
            </ColorModeProvider>
        </ChakraProvider>
    )
}