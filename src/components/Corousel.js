import { Box, Flex, GridItem, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Corousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&sort_by=popularity.desc&language=en-US`,
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
    <Box height="500px" width="55%">
      <Slider {...settings}>
        {movies.map((movie, id) => (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            height="500px"
            key={id}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Corousel;
