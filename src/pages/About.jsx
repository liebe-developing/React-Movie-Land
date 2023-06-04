import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxW={"5xl"} py={12} minH="100vh">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About me
          </Text>
          <Heading>Online Video Introducing website</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            In Movie Land you can search and find recently-released, hight
            quality movies with their specific information.
            <br />
            below technologies have been used in this project:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={FaReact} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Vite as a builder for ReactJs"}
            />
            <Feature
              icon={<Icon as={SiChakraui} color={"cyan.500"} w={5} h={5} />}
              iconBg={useColorModeValue("cyan.100", "green.900")}
              text={"Chakra UI"}
            />
            <Feature
              icon={<Icon as={AiFillApi} color={"orange.500"} w={5} h={5} />}
              iconBg={useColorModeValue("orange.100", "purple.900")}
              text={"Axios"}
            />
          </Stack>
          <Text color={"gray.500"} fontSize={"lg"}>
            Movie Api:{" "}
            <Link href="https://omdbapi.com/" target="_blank">
              omdbapi
            </Link>
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default About;
