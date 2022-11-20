import React from "react";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import '../../../public/cartOverlay.css'

const CartItem = () => {
  return (
    <div className="info_overlay">
      <b>Apollo</b>
      <p><i>Running Short</i></p>
      <b style={{fontSize: '0.75rem'}}>$50.00</b>
      <br />
      <br />
      <p><b style={{fontSize:'0.65rem'}}>SIZE:</b></p>
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
      <br />
      <b style={{fontSize:'0.65rem'}}>COLOR:</b>
      <Flex>
        <Box className="overlay__color__box" style={{ backgroundColor: "grey" }}></Box>
        <Box className="overlay__color__box" style={{ backgroundColor: "black" }}></Box>
        <Box className="overlay__color__box" style={{ backgroundColor: "green" }}></Box>
      </Flex>
    </div>
  );
};

export default CartItem;
