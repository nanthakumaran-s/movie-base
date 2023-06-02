import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    navigate("/");
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <form
        style={{
          width: "30%",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading mb="10">Movies Base</Heading>
        <FormControl mt="3" isInvalid={errors.email ? true : false}>
          <FormLabel>Email address</FormLabel>
          <InputGroup>
            <Input
              type="email"
              placeholder="Enter email address"
              {...register("email", { required: true })}
            />
          </InputGroup>
          {errors.email ? (
            <FormHelperText color="red">Email is required.</FormHelperText>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl mt="3" isInvalid={errors.password ? true : false}>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password ? (
            <FormHelperText color="red">Password is required.</FormHelperText>
          ) : (
            ""
          )}
        </FormControl>

        <Flex justifyContent="end" mt="8" width="100%">
          <Button colorScheme="twitter" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Authenticate;
