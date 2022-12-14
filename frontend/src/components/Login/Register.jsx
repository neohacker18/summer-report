import React, { useState } from "react";
import { Stack, Button, useToast, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../public/login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        let title, description;
        if (res.data.redirectTo) {
          navigate("/");
          title = "Success";
          description = "Sign Up Successful!";
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
    <Flex className="registerHero">
      <form onSubmit={handleSubmit}>
        <Stack className="fieldBox">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Stack>
        <br />
        <Stack className="fieldBox">
          <label htmlFor="email">
            Email {error && <i style={{ color: "red" }}>({error})</i>}
          </label>
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
        <Stack className="fieldBox">
          <label htmlFor="password">
            Password{" "}
            {password.length >= 5 || (
              <i style={{ color: "red" }}>(Atleast 5 characters long)</i>
            )}
          </label>
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
        <Stack className="fieldBox">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Stack>
        <br />
        <Button
          id="loginButton"
          disabled={password.length < 5 || confirmPassword !== password}
          type="submit"
          onClick={() => {
            setName(document.getElementById("name").value);
            setEmail(document.getElementById("email").value);
            setPassword(document.getElementById("password").value);
            setConfirmPassword(
              document.getElementById("confirm_password").value
            );
          }}
        >
          Register
        </Button>
        {password && confirmPassword !== password && (
          <p style={{ color: "red" }}>Passwords do not match</p>
        )}
      </form>
    </Flex>
  );
};

export default Register;
