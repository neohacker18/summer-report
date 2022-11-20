import React, { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.redirectTo) {
          navigate(res.data.redirectTo);
        }
        console.log("Signup was successful!");
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
        <Stack>
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password {password.length>=5 || <i style={{color:'red'}}>(Atleast 5 characters long)</i>}</label>
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
        <Stack>
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
          disabled={password.length<5 || confirmPassword !== password}
          type="submit"
          bg={"green.200"}
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
    </div>
  );
};

export default Register;
