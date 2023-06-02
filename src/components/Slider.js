import { Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Slider = ({ genere }) => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?with_genres=${genere.id}&include_adult=false&sort_by=popularity.desc&language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjAyZGZlNzJkZDU5YWJmNjdlZTk5OTE4Yjc0MDA4OCIsInN1YiI6IjY0NzlhN2QyMGUyOWEyMDBiZjFlMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n9aKJ5hDhR3L6M3K3jjIrTjhcaRR82jsrWpQqoevCPU",
      },
    };

    const response = await axios(options);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Flex width="100%" gap="5" flexWrap="wrap">
      {movies.map((movie, index) => {
        return (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width="250px"
            key={index}
          />
        );
      })}
    </Flex>
  );
};

export default Slider;
