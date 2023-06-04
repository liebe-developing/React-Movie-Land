import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";

const Movies = ({ movies, searchTerm, setSearchTerm, searchMovies }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Box my={"50px"}>
      <VStack my={10} spacing={6}>
        <Heading
          textAlign="center"
          size="xl"
          letterSpacing="0.6px"
          background="-webkit-linear-gradient(-90deg,
         #000 0%,
         #fff 100%)"
          backgroundClip="text"
          color="transparent"
        >
          MovieLand
        </Heading>
        <Box w="50%" display="flex" position="relative">
          <Input
            placeholder="Search for a movie"
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            roundedRight="0"
          />
          <Button
            colorScheme="orange"
            variant="solid"
            roundedLeft="0"
            onClick={() => searchMovies(searchTerm)}
          >
            <Search2Icon />
          </Button>
        </Box>
      </VStack>
      {movies?.length > 0 ? (
        <SimpleGrid columns={[1, 1, 2, 4]} rowGap={6}>
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </SimpleGrid>
      ) : (
        <Heading
          fontWeight="extrabold"
          textAlign="center"
          color="gray.500"
          mt="200px"
        >
          No movies found!
        </Heading>
      )}
    </Box>
  );
};

export default Movies;
