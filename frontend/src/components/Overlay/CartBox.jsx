import React from "react";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import '../../../public/cartOverlay.css'

const CartItem = () => {
  return (
    <div className="info_overlay">
      <p>Apollo</p>
      <p>Running Short</p>
      <p>$50.00</p>
      <p>SIZE:</p>
      <Flex>
        <Box className="overlay__size__box">XS</Box>
        <Box
          className="overlay__size__box"
          style={{ backgroundColor: "black", color: "white" }}
        >
          S
        </Box>
        <Box className="overlay__size__box">M</Box>
        <Box className="overlay__size__box">L</Box>
      </Flex>
      <h5 >COLOR:</h5>
      <Flex>
        <Box className="overlay__color__box" style={{ backgroundColor: "grey" }}></Box>
        <Box className="overlay__color__box" style={{ backgroundColor: "black" }}></Box>
        <Box className="overlay__color__box" style={{ backgroundColor: "green" }}></Box>
      </Flex>
    </div>
  );
};

export default CartItem;
