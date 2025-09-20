import React, { useRef, useState } from 'react'
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { CloseCircle, SearchNormal } from 'iconsax-react'

function SearchInput({ bg = "cusGrey.100", placeHolder = "Search contacts" }: { bg?: string, placeHolder?: string }) {
    const [value, setValue] = useState("Initial value")
    const inputRef = useRef<HTMLInputElement | null>(null)

    const endElement = value ? (
        <CloseCircle
            size="12"
            color="#6C7278"
            onClick={() => {
                setValue("")
                inputRef.current?.focus()
            }}
        />
    ) : undefined
    return (
        <InputGroup borderColor={"red"} flex="1" startElement={<SearchNormal size={"20"} color="#6C7278" />} endElement={endElement} >
            <Input bg={bg} rounded={"lg"} py={5} px={3} borderWidth={1} borderColor={"cusGrey.200"} placeholder={placeHolder} value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value)
                }} />
        </InputGroup>
    )
}

export default SearchInput