import React, { useState, useEffect } from "react";
import "../../public/productDisplay.css";
import { Box, Stack, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import Sweater from "../img/sweater.jpeg";
import HeroContainer from "./ProductDisplay/HeroContainer";
import ProductInformation from "./ProductDisplay/ProductInformation";
import axios from "axios";

const ProductDisplayPage = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const url = `http://localhost:8000/products/prodId=${props.prodId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setProduct(result.data.product);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <SimpleGrid columns={2} spacing="40px">
      <Box>
        <Grid my={20} mx={10} templateColumns='repeat(2, 1fr)'>
          <GridItem>
            <SimpleGrid rows={3} mx={10} spacingY={10}>
              <Box style={{ width: "100px", height: "100px" }}>
                <img
                  src={Sweater}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box style={{ width: "100px", height: "100px" }}>
                <img
                  src={Sweater}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box style={{ width: "100px", height: "100px" }}>
                <img
                  src={Sweater}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem>
            <HeroContainer />
          </GridItem>
        </Grid>
      </Box>
      <Box className="product__information">
        <ProductInformation />
      </Box>
    </SimpleGrid>
  );
};

export default ProductDisplayPage;
