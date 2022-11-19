import React from "react";
import {Stack, Flex, Box, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <div style={{ width: "50%", position: "absolute", top: "30vh", left: "25vw" }}>
      <form id="register__form">
        <Stack>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
            />
        </Stack>
        <br />
        <Stack>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
        </Stack>
        <br />
        <Stack>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </Stack>
        <br />
        <Button type="submit" className="btn btn-success">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Login;
