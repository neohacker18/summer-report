import React from "react";
import { Flex, Box, Spacer, Divider } from "@chakra-ui/react";
import CartBox from "../Cart/CartBox";
import RightCartBox from "../Cart/RightCartBox";

const CartProduct = ({ product }) => {
  return (
    <>
    <Flex>
      <Box p="4">
        <CartBox style={{ borderBottom: "1px solid grey" }} product={product.productId}/>
      </Box>
      <Spacer />
      <Box p="4">
        <RightCartBox product={product}/>
      </Box>
    </Flex>
    <hr />
    </>
  );
};

export default CartProduct;
