import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const Panel = ({ genere }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Text fontSize="2xl" fontWeight="medium" flex="1" textAlign="left">
            {genere.name}
          </Text>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Slider genere={genere} />
      </AccordionPanel>
    </AccordionItem>
  );
};

const Genres = () => {
  const [generes, setGeneres] = useState();
  useEffect(() => {
    const getGenres = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjAyZGZlNzJkZDU5YWJmNjdlZTk5OTE4Yjc0MDA4OCIsInN1YiI6IjY0NzlhN2QyMGUyOWEyMDBiZjFlMTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n9aKJ5hDhR3L6M3K3jjIrTjhcaRR82jsrWpQqoevCPU",
        },
      };

      const response = await axios(options);
      setGeneres(response.data.genres);
    };

    getGenres();
  }, []);
  return (
    <Flex width="90%" flexDir="column" my="10">
      <Heading as="h2">Genres</Heading>
      <Accordion allowMultiple mt="5">
        {generes &&
          generes.map((genere, index) => <Panel genere={genere} key={index} />)}
      </Accordion>
    </Flex>
  );
};

export default Genres;
