import React from "react";
import "../../../public/productDisplay.css";
import {
  Box,
} from "@chakra-ui/react";

const HeroContainer = ({imageUrl}) => {
  return (
    <Box id="heroImage">
      <img src={imageUrl} alt="img"/>
    </Box>
  );
};

export default HeroContainer;
