import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const ProductInformation = () => {
  return (
    <div>
      <h1 id="product_title">Apollo</h1>
      <h5 id="product_description">Running Short</h5>
      <h5 className="box__type__tag">SIZE:</h5>
      <Flex>
        <Box className="size__box">XS</Box>
        <Box
          className="size__box"
          style={{ backgroundColor: "black", color: "white" }}>
          S
        </Box>
        <Box className="size__box">M</Box>
        <Box className="size__box">L</Box>
      </Flex>
      <h5 className="box__type__tag">COLOR:</h5>
      <Flex>
        <Box className="color__box" style={{ backgroundColor: "grey" }}></Box>
        <Box className="color__box" style={{ backgroundColor: "black" }}></Box>
        <Box className="color__box" style={{ backgroundColor: "green" }}></Box>
      </Flex>
      <h5 className="box__type__tag">PRICE:</h5>
      <h5 className="box__type__tag">$50.00</h5>
      <button id="add_to_cart">ADD TO CART</button>
      <p>
        Find stunning women's cocktail dresses and party dresses. Stand out in
        lace and metallic cocktail dresses and party dresses from all your
        favorite brands.
      </p>
    </div>
  );
};

export default ProductInformation;
