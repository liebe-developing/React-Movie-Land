import {
  Badge,
  Box,
  Circle,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const { Title, Poster, Type, Year, imdbID } = movie;
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      rounded="md"
      boxShadow="lg"
      position="relative"
      onMouseOver={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      _hover={{ opacity: "0.9", cursor: "pointer" }}
      w="290px"
      h="350px"
      role="group"
    >
      <Image
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={`Picture of ${Title}`}
        objectFit="fill"
        rounded="lg"
        w="full"
        h="full"
      />
      <Badge
        position="absolute"
        top="10px"
        left="10px"
        variant="subtle"
        display="none"
        _groupHover={{ display: "flex" }}
      >
        {Year}
      </Badge>
      <Box
        roundedBottom="md"
        boxShadow="lg"
        position="absolute"
        bottom="0"
        bgColor={isCardHovered ? "transparent" : "#00000070"}
        w="full"
        p={2.5}
      >
        <Badge variant="solid" colorScheme="orange">
          {Type}
        </Badge>
        <Tooltip label={Title} hasArrow>
          <Text
            mt="5px"
            textTransform="uppercase"
            color="white"
            fontWeight="extrabold"
            fontSize="15px"
            noOfLines={1}
          >
            {Title}
          </Text>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default MovieCard;
