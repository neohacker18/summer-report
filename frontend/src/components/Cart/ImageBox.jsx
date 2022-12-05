import React from "react";
import { Flex, Box, Spacer, Stack, Button, VStack } from "@chakra-ui/react";
import Sweater from "../../img/sweater.jpeg";
import "../../../public/cart.css";

const ImageBox = ({imageUrl}) => {
  console.log(imageUrl)
  return (
    <div>
      <Box p="4" className="cart__image">
        <img src={imageUrl} alt="123" />
      </Box>
    </div>
  );
};

export default ImageBox;
