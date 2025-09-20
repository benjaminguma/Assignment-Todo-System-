"use client"
import {
    HStack,
    Button,
    Box,
    Avatar, Menu, Portal,
    Text
} from '@chakra-ui/react';
import { customButtonRecipe, iconButtonRecipe } from '../components/molecules/buttonRecipes';
import { PropsWithChildren } from 'react';
import { NavIcons } from '../components/atoms';
import { Link1, Notification } from 'iconsax-react';
import SearchInput from '../components/molecules/SearchInput';


const TopNav = () => {
    return (
        <HStack
            bg="bg"
            p={4}
            gap={4}
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={"1px"}
            borderColor={"bordl"}
        >
            <div className="">
                <SearchInput />
            </div>
            <HStack gap={4}>
                <NavButton colorScheme="outline" >
                    <NavIcons.A />
                </NavButton>
                <NavButton colorScheme="outline" >
                    <NavIcons.B />
                </NavButton>
                <NavButton colorScheme="outline" >
                    <NavIcons.C />
                </NavButton>
                <NavButton colorScheme="outline" >
                    <NavIcons.D />
                </NavButton>
            </HStack>
            <HStack gap={2}>
                <NavButton colorScheme="purple">Meldingsmaken</NavButton>
                <NavButton colorScheme="teal">VIM</NavButton>
                <NavButton colorScheme="teal">LMS</NavButton>
                <NavButton colorScheme="teal">BHV</NavButton>
                <NavButton colorScheme="teal">Dat.ak</NavButton>
            </HStack>
            <HStack gap={4}>
                <Button {...iconButtonRecipe({ radius: "md" })}>
                    <Link1 size="18" color="#464B50" />
                </Button>

                <Button {...iconButtonRecipe()}>
                    <Notification size="18" color="#464B50" />
                </Button>
                <AuthenticatedUserDropDown />
            </HStack>
        </HStack>
    );
};

export default TopNav;
const AuthenticatedUserDropDown = () => {
    return (
        <Menu.Root positioning={{ placement: "bottom-end" }} >
            <Menu.Trigger rounded="full" focusRing="outside" cursor="pointer">
                <HStack gap={3} bg={"cusGrey.100"} p={1} rounded={"full"}>
                    <Avatar.Root size="sm">
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                    <Text as="p" fontSize={"base"} >Hi Paul</Text>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4534 4.77167H6.81926H3.54676C2.98676 4.77167 2.70676 5.44833 3.10343 5.845L6.1251 8.86667C6.60926 9.35083 7.39676 9.35083 7.88093 8.86667L9.0301 7.7175L10.9026 5.845C11.2934 5.44833 11.0134 4.77167 10.4534 4.77167Z" fill="#6C7278" />
                    </svg>
                </HStack>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner w={"30px"} bg={"bg"} color={"fg"}  >
                    <Menu.Content fontSize={"base"}>
                        <Menu.Item value="account" >Account</Menu.Item>
                        <Menu.Item value="settings">Settings</Menu.Item>
                        <Menu.Item value="logout">Logout</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}


const NavButton = ({ colorScheme = "default", children }: PropsWithChildren<{ colorScheme?: "purple" | "teal" | "default" | "outline" }>) => {
    return (
        <Button {...customButtonRecipe({ colorScheme })}>
            {children}
        </Button>
    );
};
