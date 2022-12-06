import React from "react";
import { Box, Flex, Button, useToast, Text } from "@chakra-ui/react";
import axios from "axios";
import "../../../public/productDisplay.css";

const ProductInformation = (props) => {
  const toast = useToast();
  const brand = props.brand;
  const title = props.title;
  const size = props.size;
  const price = props.price;
  // const description = props.description;
  const productId = props.productId;
  const handleSubmit = (e) => {
    toast({
      description: "Item added to cart!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    const url = "http://localhost:8000/cart";
    const userId = localStorage.getItem("userId");
    axios
      .post(url, {
        productId: productId,
        userId: userId,
        option: "Add",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Flex direction={"column"}>
      <h1 id="productBrand">{brand}</h1>
      <br />
      <h5 id="productTitle">{title}</h5>
      <br />
      <br />
      <h5 id="productSizeTag">SIZE:</h5>
      <Flex>
        <Box
          className="size__box"
          style={{
            backgroundColor: `${size === "XS" ? `black` : `white`}`,
            color: `${size === "XS" ? `white` : ` black`}`,
          }}
        >
          XS
        </Box>
        <Box
          className="size__box"
          style={{
            backgroundColor: `${size === "S" ? `black` : `white`}`,
            color: `${size === "S" ? `white` : ` black`}`,
          }}
        >
          S
        </Box>
        <Box
          className="size__box"
          style={{
            backgroundColor: `${size === "M" ? `black` : `white`}`,
            color: `${size === "M" ? `white` : ` black`}`,
          }}
        >
          M
        </Box>
        <Box
          className="size__box"
          style={{
            backgroundColor: `${size === "L" ? `black` : `white`}`,
            color: `${size === "L" ? `white` : ` black`}`,
          }}
        >
          L
        </Box>
        <Box
          className="size__box"
          style={{
            backgroundColor: `${size === "XL" ? `black` : `white`}`,
            color: `${size === "XL" ? `white` : ` black`}`,
          }}
        >
          XL
        </Box>
      </Flex>
      <br />
      <h5 id="productSizeTag">PRICE:</h5>
      <h5 id="priceTag">$ {price}</h5>
      <br />
      <Button id="productAddToCartButton" color={'white'}
        onClick={() => {
          handleSubmit();
        }}
      >
        <h1>Add to cart</h1>
      </Button>
      <br />
    </Flex>
  );
};

export default ProductInformation;
