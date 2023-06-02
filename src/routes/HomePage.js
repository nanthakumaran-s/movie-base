import { Button, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Genres from "../components/Genres";
import Corousel from "../components/Corousel";

const HomePage = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState([]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/auth");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/auth");
  };

  return (
    <Flex flexDir="column" width="100%" alignItems="center">
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        mt="7"
        px="10"
      >
        <Heading>Movie Base</Heading>
        <Flex>
          <Button onClick={handleLogout}>Logout</Button>
        </Flex>
      </Flex>
      <Divider mt="7" />
      <Flex width="50%" mt="16" gap="5">
        <Input
          height="14"
          placeholder="Search..."
          fontSize="xl"
          onChange={onChangeHandler}
          mb="10"
        />
      </Flex>
      <Corousel />
      <Genres />
    </Flex>
  );
};

export default HomePage;
