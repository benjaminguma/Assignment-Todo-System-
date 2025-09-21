import React, { useRef, useState } from 'react'
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { CloseCircle, SearchNormal } from 'iconsax-react'

type SearchInputProps = {
    bg?: string;
    placeHolder?: string;
    size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
    sm: { py: 2, px: 2, icon: 16 },
    md: { py: 3, px: 3, icon: 20 },
    lg: { py: 5, px: 4, icon: 24 },
};

function SearchInput({ bg = "cusGrey.100", placeHolder = "Search contacts", size = 'md' }: SearchInputProps) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { py, px, icon } = sizeMap[size] || sizeMap.md;

    const endElement = value ? (
        <CloseCircle
            size={icon}
            color="#6C7278"
            onClick={() => {
                setValue("");
                inputRef.current?.focus();
            }}
        />
    ) : undefined;

    return (
        <InputGroup
            flex="1"
            startElement={<SearchNormal size={icon} color="#6C7278" />}
            endElement={endElement}
        >
            <Input
                ref={inputRef}
                bg={bg}
                rounded={"lg"}
                py={py}
                px={px}
                borderWidth={0}
                _focus={{ borderWidth: 0, boxShadow: 'none' }}
                _hover={{ borderWidth: 0, boxShadow: 'none' }}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
            />
        </InputGroup>
    );
}

export default SearchInput