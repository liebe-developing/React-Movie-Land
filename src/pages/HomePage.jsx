import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Movies2023 from "../assets/upcoming-Movies-2023.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex direction="column" alignItems="center" minH={"100vh"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        minH={"100vh"}
      >
        <Flex p={8} flex={1} alignItems={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bgColor: "orange.400",
                  zIndex: -1,
                }}
              >
                Download
              </Text>
              <br />{" "}
              <Text color={"orange.400"} as={"span"}>
                Free Movies and Series
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.400"}>
              You can find recently-released, high quality movies with their
              information here in Movie Land.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <NavLink to="/movies">
                <Button
                  rounded={"full"}
                  bg={"orange.400"}
                  color={"white"}
                  _hover={{
                    bg: "orange.500",
                  }}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Browse Movies
                </Button>
              </NavLink>
              <Button rounded={"full"}>GitHub</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image
            boxShadow="dark-lg"
            borderRadius="xl"
            alt={"Login Image"}
            objectFit={"cover"}
            src={Movies2023}
          />
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
  );
};

export default HomePage;
