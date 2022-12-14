import React, { useState, useEffect } from "react";
import "../../../public/category.css";
import {
  Heading,
  SimpleGrid,
  Box,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
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
  //  filter data u are getting from mongodb to reduce load using filter to filter out category and pagination
  return (
    <div className="hero__container">
      <Heading>Women's Clothes</Heading>
      <br />
      <Wrap>
        {products &&
          products.map((product, index) => {
            return (
              <CategoryItem
                key={index}
                brand={product.brand}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                size={product.size}
                description={product.description}
                id={product._id}
              />
            );
          })}
      </Wrap>
    </div>
  );
};

export default Men;
