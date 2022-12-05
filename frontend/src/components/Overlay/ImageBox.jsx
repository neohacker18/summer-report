import React from "react";
import { Flex, Box, Spacer, Stack, Button, VStack } from "@chakra-ui/react";
import Sweater from "../../img/sweater.jpeg";
import '../../../public/cartOverlay.css'
const ImageBox = ({imageUrl}) => {
  const char1 = "<";
  const char2 = ">";
  return (
    <div>
      <Box p="4" className="overlay__image">
        <img src={imageUrl} alt="" />
        <Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default ImageBox;
