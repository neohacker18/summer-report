import React, { useState } from "react";
import { Stack, Flex, Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.redirectTo) {
          navigate(res.data.redirectTo);
          console.log("User Logged In");
        }
        if(res.data.errorMessage)
        {
          setError(res.data.errorMessage)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{ width: "50%", position: "absolute", top: "30vh", left: "25vw" }}
    >
      <form id="register__form" onSubmit={handleSubmit}>
        <Stack>
          <label htmlFor="email">Email {error && (<i style={{color:'red'}}>({error})</i>)}</label>
          <input
            type="email"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <br />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
