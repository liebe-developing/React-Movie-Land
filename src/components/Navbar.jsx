import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Heading,
  ButtonGroup,
  useColorMode,
  Stack,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Movies", path: "/movies" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        px={4}
        pos="sticky"
        zIndex="9999"
        w="100%"
        top="0"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Heading size="md">Movie Land</Heading>
            </NavLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link to={link.path} key={link}>
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ButtonGroup colorScheme="orange">
              <IconButton
                variant={"ghost"}
                aria-label={`${colorMode} color mode`}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                colorScheme="gray.600"
              />
              <NavLink to="/signin">
                <Button variant={"ghost"}>Sign In</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button variant={"solid"}>Sign Up</Button>
              </NavLink>
            </ButtonGroup>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link to={link.path} key={link}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
