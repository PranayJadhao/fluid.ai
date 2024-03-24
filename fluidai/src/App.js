import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(
          `https://www.omdbapi.com/?s=${
            searchQuery || "batman"
          }&apikey=bbe6805d`
        );
        var data = await res.json();
        console.log(data);
        setMovies(data.Search);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(search);
    console.log(search);
  };

  return (
    <Box p={4}>
      <Heading
        as="h1"
        size="xl"
        mb={4}
        textAlign="center"
        fontFamily="heading"
        fontWeight="bold"
        color="blue.600"
      >
        Movie App
      </Heading>

      <Box textAlign="center" mb={4}>
        <Input
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          mx="auto"
          width={{ base: "100%", md: "50%" }}
          borderRadius="md"
          borderColor="gray.400"
          _focus={{ borderColor: "blue.500" }}
        />
      </Box>

      <Button
        id="searchButton"
        onClick={handleSearch}
        colorScheme="blue"
        mx="auto"
        display="block"
      >
        Search
      </Button>

      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={4}
        mt={8}
        textAlign="center"
        margin="auto"
      >
        {movies.map((movie, i) => (
          <MovieCard key={i} prop={movie} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
