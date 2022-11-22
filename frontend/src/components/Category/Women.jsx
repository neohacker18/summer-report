import React, { useState, useEffect } from "react";
import "../../../public/category.css";
import { Heading, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";
import axios from "axios";
const Men = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const url = "http://localhost:8000/products/category=Female";

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setProducts(result.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="hero__container">
      <Heading>Women's Clothes</Heading>
      <br />
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Flex>
          <Box>
            {products &&
              products.map((product, index) => {
                return (
                  <CategoryItem
                    key={index}
                    brand={product.brand}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                    id={product._id}
                  />
                );
              })}
          </Box>
        </Flex>
      </SimpleGrid>
    </div>
  );
};

export default Men;
