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

const ProductInformation = (props) => {
  const brand = props.brand;
  const title = props.title;
  const size = props.size;
  const price = props.price;
  const description = props.description;
  return (
    <div>
      <h1 id="product_title">{brand}</h1>
      <h5 id="product_description">{title}</h5>
      <h5 className="box__type__tag">SIZE:</h5>
      <Flex>
        <Box className="size__box"
        style={{
          backgroundColor: `${size === "XS" ? `black` : `white`}`,
          color: `${size === "XS" ? `white` : ` black`}`,
        }}
        >XS</Box>
        <Box
          className="size__box"
          style={{
            backgroundColor: `${size === "S" ? `black` : `white`}`,
            color: `${size === "S" ? `white` : ` black`}`,
          }}
        >
          S
        </Box>
        <Box className="size__box" style={{
            backgroundColor: `${size === "M" ? `black` : `white`}`,
            color: `${size === "M" ? `white` : ` black`}`,
          }}>M</Box>
        <Box className="size__box"
        style={{
            backgroundColor: `${size === "L" ? `black` : `white`}`,
            color: `${size === "L" ? `white` : ` black`}`,
          }}>L</Box>
        <Box className="size__box"
        style={{
            backgroundColor: `${size === "XL" ? `black` : `white`}`,
            color: `${size === "XL" ? `white` : ` black`}`,
          }}>XL</Box>
      </Flex>
      <h5 className="box__type__tag">PRICE:</h5>
      <h5 className="box__type__tag">${price}</h5>
      <button id="add_to_cart">ADD TO CART</button>
      <p>{description}</p>
    </div>
  );
};

export default ProductInformation;
