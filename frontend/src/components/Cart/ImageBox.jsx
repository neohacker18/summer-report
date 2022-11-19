import React from "react";
import { Flex, Box, Spacer, Stack, Button, VStack } from "@chakra-ui/react";
import Sweater from "../../img/sweater.jpeg";
import "../../../public/cart.css";

const ImageBox = () => {
  const char1 = "<";
  const char2 = ">";
  return (
    <div>
      <Box p="4" className="cart__image">
        <img src={Sweater} alt="" />
        <Flex>
          <Button my={2}>{char1}</Button>
          <Button my={2} mx={5}>{char2}</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default ImageBox;
