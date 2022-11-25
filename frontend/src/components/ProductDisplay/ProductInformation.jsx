import React from "react";
import { Box, Flex, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const ProductInformation = (props) => {
  const toast = useToast();
  const brand = props.brand;
  const title = props.title;
  const size = props.size;
  const price = props.price;
  const description = props.description;
  const productId = props.productId;
  const handleSubmit = (e) => {
    console.log("clicked");
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
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 id="product_title">{brand}</h1>
      <h5 id="product_description">{title}</h5>
      <h5 className="box__type__tag">SIZE:</h5>
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
      <h5 className="box__type__tag">PRICE:</h5>
      <h5 className="box__type__tag">${price}</h5>
      <br />
      <Button size={"lg"} bg={"green.300"} onClick={handleSubmit}>
        Add to cart
      </Button>
      <br />
      {/* <p>{description}</p> */}
    </div>
  );
};

export default ProductInformation;
