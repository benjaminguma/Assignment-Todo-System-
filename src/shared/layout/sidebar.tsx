"use client"
import React, { useState, useMemo } from "react";
import { Box, Flex, Text, VStack, Icon, Collapsible, useDisclosure, Menu, Image, Button, Portal } from "@chakra-ui/react";
import { ISidebarItem, sidebarItems } from "../static";
import Logo from "../components/atoms/Logo";
import { ArrowDown2 } from "iconsax-react";
import {
    Switch,
} from "@chakra-ui/react";
import { CountryIcons } from "../components/atoms";

const Sidebar = () => {
    return (
        <Box
            w="250px"
            h="100vh"
            bg="bg"
            borderRight="1px solid"
            display="flex"
            flexDirection="column"
            justifyContent={"space-between"}
            alignItems={"center"}
            py={6}
            borderBottomWidth={"1px"}
            borderColor={"bordl"}
        >
            {/* Logo Box */}
            <Flex
                h="16"
                align="center"
                justify="center"
                borderBottom="1px solid"
                borderColor="gray.200"
            >
                <Logo />
            </Flex>

            {/* Menu Items */}
            <VStack align="stretch" gap={1} py={4} flex="1" overflowY="auto">
                {sidebarItems.map((item, idx) => (
                    <SidebarItem key={idx} item={item} />
                ))}
            </VStack>
            <SettingsCard />

        </Box>
    );
};

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
    const IconComponent = item.icon;
    const dis = useDisclosure()
    return (
        <Box fontSize={"base"}>
            <Collapsible.Root defaultOpen={dis.open} onOpenChange={dis.onToggle} >
                <Collapsible.Trigger borderColor={"red.500"} w={"full"} >
                    <Flex
                        align="center"
                        justifyContent={"space-between"}
                        as={"a"}
                        cursor="pointer"
                        _hover={{ bg: "teal.50", color: "teal.600" }}
                        paddingY="1.5"
                        color={"gray.600"}
                        borderRadius={"md"}
                        px={"2"}

                    >
                        <Flex
                            align="center"
                            gap={2}
                        >
                            {
                                IconComponent ? <IconComponent size={18} color="#7988A9" /> : null
                            }

                            <Text as="span" fontWeight="medium" >
                                {item.label}
                            </Text>
                        </Flex>
                        {item.children ?

                            <Icon rotate={dis.open ? "180deg" : "0deg"} transition="transform 0.2s">
                                <ArrowDown2 size="18" color="#666" />
                            </Icon>
                            : null}
                    </Flex>

                </Collapsible.Trigger>
                {item.children && (
                    <Collapsible.Content>
                        <VStack align="stretch" gap={1} pl={6} >
                            {item.children.map((child, idx) => (
                                <SidebarItem key={idx} item={child} />
                            ))}
                        </VStack>
                    </Collapsible.Content>
                )}
            </Collapsible.Root>
        </Box>
    );
};

export default Sidebar;








const languages = [
    { code: "en", label: "English", flag: <CountryIcons.England /> },
    { code: "fr", label: "French", flag: <CountryIcons.England /> },
    { code: "es", label: "Spanish", flag: <CountryIcons.England /> },
];

function LanguageMenu() {
    const [selected, setSelected] = useState(languages[0]);
    const l = useMemo(() => languages, [])
    return (
        <Menu.Root positioning={{ placement: "top" }} >
            <Menu.Trigger asChild bg={"white"}>
                <Button
                    variant="outline"
                    size="sm"
                    justifyContent="space-between"
                    w="full"
                    px={2}
                >
                    <Flex align="center" gap={2}>
                        <CountryIcons.England />
                        <Text color="gray.800">
                            {selected.label}
                        </Text>
                    </Flex>
                    {/* <Box as={ChevronDown} boxSize="16px" color="gray.500" /> */}
                </Button>
            </Menu.Trigger>
            <Menu.Positioner  >
                <Menu.Content bg={"bg"} width={"200px"} border={"1px solid"} shadow={"none"} borderColor={"bordl"} >
                    {languages.map((lang) => (
                        <Menu.Item
                            bg={"white"}
                            key={lang.code}
                            value={lang.code}
                            onClick={() => setSelected(lang)}
                            _hover={{ bg: "teal.50", color: "teal.600" }}
                            color={"gray.600"}
                        >
                            <CountryIcons.England />
                            <Text >{lang.label}</Text>
                        </Menu.Item>
                    ))}
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    );
}


const SettingsCard = () => {
    const [checked, setChecked] = useState(false)
    return (
        <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={2}
            w="200px"
            bg="white"
        >
            {/* Language Selector */}
            <Box mb={2}>
                <LanguageMenu />
            </Box>

            {/* Dark Mode Toggle */}
            <Flex
                align="center"
                justify="space-between"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                px={2}
                py={1}
            >
                <Text fontSize="sm" color="gray.800">
                    Dark mode
                </Text>
                <Switch.Root
                    colorPalette={"teal"}
                    checked={checked}
                    onCheckedChange={(e) => setChecked(e.checked)}
                >
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label />
                </Switch.Root>
            </Flex>
        </Box>
    );
};



