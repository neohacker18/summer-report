import React, { useState,useContext } from "react";
import { Stack, Flex, Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import AuthContext from "../../context/AuthContext";
import '../../../public/login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const toast = useToast();

  const { setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        let title, description;
        if (res.data.redirectTo) {
          navigate(res.data.redirectTo);
          const user = res.data.user;
          setUser(user);
          localStorage.setItem('isLoggedIn',true);
          localStorage.setItem('userId',user._id);
          title = "Success";
          description = `Welcome Back, ${user.name} !`;
        }
        if (res.data.errorMessage) {
          title = "Error";
          description = "Something went wrong";
          setError(res.data.errorMessage);
        }
        toast({
          title: title,
          description: description,
          status: `${title === `Error` ? `error` : `success`}`,
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex className="loginHero">
      <form id="register__form" onSubmit={handleSubmit}>
        <Stack className="fieldBox">
          <label htmlFor="email">
            Email {error && <i style={{ color: "red" }}>({error})</i>}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <br />
        <Stack className="fieldBox">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <br />
        <Button type="submit" id="loginButton">
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
