import React from "react";
import "../../../public/productDisplay.css";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Sweater from "../../img/sweater.jpeg";

const HeroContainer = () => {
  return (
    <Box style={{ width: "350px", height: "390px" }}>
      <img src={Sweater} alt="img"/>
    </Box>
  );
};

export default HeroContainer;
