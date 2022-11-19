import React from "react";
import "../../public/productDisplay.css";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  StackDivider,
} from "@chakra-ui/react";
import Sweater from "../img/sweater.jpeg";
import HeroContainer from "./ProductDisplay/HeroContainer";
import ProductInformation from "./ProductDisplay/ProductInformation";

const ProductDisplayPage = () => {
  return (
    <Flex className="main__hero">
      <Flex className="sideview__images">
        <Box>
          <img src={Sweater} alt="" style={{ top: "160px" }} />
        </Box>
        <Box>
          <img src={Sweater} alt="" style={{ top: "280px" }} />
        </Box>
        <Box>
          <img src={Sweater} alt="" style={{ top: "400px" }} />
        </Box>
      </Flex>
      <HeroContainer />
      <div className="product__information">
        <ProductInformation />
      </div>
    </Flex>
  );
};

export default ProductDisplayPage;
