import React, { useState, useEffect } from "react";
import "../../public/productDisplay.css";
import { Box, Stack, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import Sweater from "../img/sweater.jpeg";
import HeroContainer from "./ProductDisplay/HeroContainer";
import ProductInformation from "./ProductDisplay/ProductInformation";
import { useLocation } from "react-router-dom";

const ProductDisplayPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  const {state} = useLocation();
  const {data} = state;
  const brand = data.brand;
  const title = data.title;
  const description = data.description;
  const imageUrl = data.imageUrl;
  const size = data.size;
  const price = data.price;
  return (
    <SimpleGrid columns={2} spacing="40px">
      <Box>
        <Grid my={20} mx={10} templateColumns="repeat(2, 1fr)">
          <GridItem>
            <SimpleGrid rows={3} mx={10} spacingY={10}>
              <Box style={{ width: "100px", height: "100px" }}>
                <img
                  src={imageUrl}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box style={{ width: "100px", height: "100px" }}>
                <img
                  src={imageUrl}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box style={{ width: "100px", height: "100px" }}>
                <img
                  src={imageUrl}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem>
            <HeroContainer imageUrl={imageUrl}/>
          </GridItem>
        </Grid>
      </Box>
      <Box className="product__information">
        <ProductInformation brand={brand} title={title} size={size} price={price} description={description}/>
      </Box>
    </SimpleGrid>
  );
};

export default ProductDisplayPage;
